/*
 * Copyright (c) 2021 Dipesh Shrestha aka JustaDreamer
 * Github: https://github.com/JustaNormalDreamer
 */

import { BaseService } from './BaseService';
import { __trans } from './Localization/Translate';
import { Service } from 'typedi';

export function ResponseWrapperService<T, Y>(entity: any, responseClass: any, entityName: string) {
  @Service()
  abstract class ResponseWrapperServiceHost extends BaseService<T>(entity) {
    protected get entityName(): string {
      return entityName;
    }

    public async findAllAndRespond(): Promise<Y> {
      return new responseClass(
        `${entityName}_200`,
        __trans(`${entityName}_200`),
        await this.findAll()
      );
    }

    public async findByIdAndRespond(id: string): Promise<Y> {
      return new responseClass(
        `${entityName}_200`,
        __trans(`${entityName}_200`),
        await this.findById(id)
      );
    }

    public async deleteByIdAndRespond(id: string): Promise<Y> {
      return new responseClass(
        `${entityName}_204`,
        __trans(`${entityName}_204`),
        await this.delete(id)
      );
    }
  }

  return ResponseWrapperServiceHost;
}
