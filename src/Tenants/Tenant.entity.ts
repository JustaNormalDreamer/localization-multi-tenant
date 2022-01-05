/*
 * Copyright (c) 2021 Dipesh Shrestha aka JustaDreamer
 * Github: https://github.com/JustaNormalDreamer
 */

import { Column, Entity, Unique } from 'typeorm';
import { TenantConfig } from './TenantConfig';
import { BaseModel } from '../BaseModel';

@Entity({
  name: 'tenants',
  schema: 'public'
})
@Unique(['_code'])
export class Tenant extends BaseModel {
  @Column()
  private _name: string;

  @Column()
  private _code: string;

  // @Column("jsonb")
  // private _config: TenantConfig;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }
}
