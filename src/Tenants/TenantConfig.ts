/*
 * Copyright (c) 2021 Dipesh Shrestha aka JustaDreamer
 * Github: https://github.com/JustaNormalDreamer
 */

import { Column } from 'typeorm';

export class TenantConfig {
  @Column()
  private _dbName: string;

  @Column()
  private _dbPassword: string;

  @Column()
  private _dbUser: string;

  get dbName(): string {
    return this._dbName;
  }

  set dbName(value: string) {
    this._dbName = value;
  }

  get dbPassword(): string {
    return this._dbPassword;
  }

  set dbPassword(value: string) {
    this._dbPassword = value;
  }

  get dbUser(): string {
    return this._dbUser;
  }

  set dbUser(value: string) {
    this._dbUser = value;
  }
}
