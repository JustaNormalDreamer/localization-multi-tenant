/*
 * Copyright (c) 2021 Dipesh Shrestha aka JustaDreamer
 * Github: https://github.com/JustaNormalDreamer
 */

import { License } from './License.entity';
import { LicenseRequest } from './License.request';
import { LicenseResponse } from './LicenseResponse';
import { __trans } from '../Localization/Translate';
import { ResponseWrapperService } from '../ResponseWrapperService';
import { Service } from 'typedi';

@Service()
export class LicenseService extends ResponseWrapperService<License, LicenseResponse>(
  License,
  LicenseResponse,
  'LICENSE'
) {
  public async create(licenseRequest: LicenseRequest): Promise<LicenseResponse> {
    const license = this.repository.create({
      ...licenseRequest
    });

    return new LicenseResponse(
      'LICENSE_201',
      await __trans('LICENSE_201'),
      await this.createOrUpdate(license)
    );
  }

  public async update(id: string, licenseRequest: LicenseRequest): Promise<LicenseResponse> {
    const license = this.repository.create({
      id,
      ...licenseRequest
    });

    return new LicenseResponse(
      'LICENSE_200',
      await __trans('LICENSE_200'),
      await this.createOrUpdate(license)
    );
  }
}
