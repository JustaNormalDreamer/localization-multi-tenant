import {Body, Delete, Get, JsonController, Param, Post} from "routing-controllers";
import {InjectRepository} from "typeorm-typedi-extensions";
import {Tenant} from "./Tenant.entity";
import {EntityManager, Repository, Transaction, TransactionManager} from "typeorm";
import {TenantRequest} from "./Tenant.request";
import {config} from "../config/config";
import {TenantResponse} from "./TenantResponse";
import {__trans} from "../Localization/Translate";

@JsonController("/tenants")
export class TenantController {

    @InjectRepository(Tenant)
    private readonly tenantRepository: Repository<Tenant>;

    @Get()
    public async index() {
        return new TenantResponse('FETCH_TENANTS_200', await __trans('FETCH_TENANTS_200'), await this.tenantRepository.find());
    }

    @Post()
    @Transaction()
    public async store(@TransactionManager() manager: EntityManager, @Body() tenantRequest: TenantRequest) {
        const tenant = this.tenantRepository.create({
            ...tenantRequest,
            // config: {
            //     dbUser: tenantRequest.code,
            //     dbPassword: tenantRequest.code,
            //     dbName: tenantRequest.code,
            // },
        });

        const tenantCreated = await manager.save(tenant);

        await manager.query(`CREATE SCHEMA IF NOT EXISTS ${config.tenantPrefix}_${tenantCreated.code}`);

        return new TenantResponse('CREATE_TENANT_201', await __trans("CREATE_TENANT_201"), tenantCreated);
    }

    @Delete("/:id")
    @Transaction()
    public async destroy(@TransactionManager() manager: EntityManager, @Param("id") id: string) {
        const tenant: Tenant = await this.tenantRepository.findOneOrFail(id);
        await manager.remove(tenant);
        await manager.query(`DROP SCHEMA IF EXISTS ${config.tenantPrefix}_${tenant.code}`);
        return new TenantResponse('DELETE_TENANT_200', await __trans("DELETE_TENANT_200"));
    }

}