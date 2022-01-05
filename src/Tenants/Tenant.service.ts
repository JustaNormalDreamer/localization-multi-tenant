/*
 * Copyright (c) 2021 Dipesh Shrestha aka JustaDreamer
 * Github: https://github.com/JustaNormalDreamer
 */

import { ResponseWrapperService } from '../ResponseWrapperService';
import { Tenant } from './Tenant.entity';
import { TenantResponse } from './TenantResponse';
import { __trans } from '../Localization/Translate';
import { TenantRequest } from './Tenant.request';
import { Service } from 'typedi';
import { config } from '../config/config';

@Service()
export class TenantService extends ResponseWrapperService<Tenant, TenantResponse>(
  Tenant,
  TenantResponse,
  'TENANT'
) {
  public async create(tenantRequest: TenantRequest): Promise<TenantResponse> {
    const tenant = await this.entityManager.transaction(async (manager) => {
      const tenant = this.repository.create({
        ...tenantRequest
      });

      const tenantCreated = await this.createOrUpdate(tenant);
      await manager.query(
        `CREATE SCHEMA IF NOT EXISTS ${config.tenantPrefix}_${tenantCreated.code}`
      );
      return tenantCreated;
    });

    return new TenantResponse('TENANT_201', await __trans('TENANT_201'), tenant);
  }

  public async update(id: string, tenantRequest: TenantRequest): Promise<TenantResponse> {
    const license = this.repository.create({
      id,
      ...tenantRequest
    });

    return new TenantResponse(
      'TENANT_200',
      await __trans('TENANT_200'),
      await this.createOrUpdate(license)
    );
  }

  public async deleteAndRespond(id: string): Promise<TenantResponse> {
    await this.entityManager.transaction(async (manager) => {
      const tenant: Tenant = await this.repository.findOneOrFail(id);
      await manager.remove(tenant);
      await manager.query(`DROP SCHEMA IF EXISTS ${config.tenantPrefix}_${tenant.code}`);
    });

    return new TenantResponse('DELETE_TENANT_200', await __trans('DELETE_TENANT_200'));
  }
}
