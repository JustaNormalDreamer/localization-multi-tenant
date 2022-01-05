/*
 * Copyright (c) 2021 Dipesh Shrestha aka JustaDreamer
 * Github: https://github.com/JustaNormalDreamer
 */

import { Body, Delete, Get, JsonController, Param, Post } from 'routing-controllers';
import { InjectManager, InjectRepository } from 'typeorm-typedi-extensions';
import { Tenant } from './Tenant.entity';
import { EntityManager, Repository, Transaction } from 'typeorm';
import { TenantRequest } from './Tenant.request';
import { TenantResponse } from './TenantResponse';
import { Inject } from 'typedi';
import { TenantService } from './Tenant.service';

@JsonController('/tenants')
export class TenantController {
  @Inject()
  private readonly tenantService: TenantService;

  @InjectRepository(Tenant)
  private readonly tenantRepository: Repository<Tenant>;

  @InjectManager()
  private readonly entityManager: EntityManager;

  @Get()
  public async index(): Promise<TenantResponse> {
    return await this.tenantService.findAllAndRespond();
  }

  @Get('/:id')
  public async show(@Param('id') id: string): Promise<TenantResponse> {
    return await this.tenantService.findAllAndRespond();
  }

  @Post()
  @Transaction()
  public async store(@Body() tenantRequest: TenantRequest) {
    return await this.tenantService.create(tenantRequest);
  }

  @Delete('/:id')
  @Transaction()
  public async destroy(@Param('id') id: string) {
    return await this.tenantService.deleteAndRespond(id);
  }
}
