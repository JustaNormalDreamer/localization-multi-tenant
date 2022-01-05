/*
 * Copyright (c) 2021 Dipesh Shrestha aka JustaDreamer
 * Github: https://github.com/JustaNormalDreamer
 */

import { IsNotEmpty } from 'class-validator';

export class TenantRequest {
  @IsNotEmpty()
  private _name: string;

  @IsNotEmpty()
  private _code: string;

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
