/*
 * Copyright (c) 2021 Dipesh Shrestha aka JustaDreamer
 * Github: https://github.com/JustaNormalDreamer
 */

import { Column, Entity, Unique } from 'typeorm';
import { BaseModel } from '../BaseModel';

@Entity({
  name: 'licenses',
  schema: 'public'
})
@Unique(['_code'])
export class License extends BaseModel {
  @Column()
  private _code: string;

  @Column()
  private _expirationDate: Date;

  @Column()
  private _isActive: boolean;

  @Column()
  private _activationDate: Date;

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get expirationDate(): Date {
    return this._expirationDate;
  }

  set expirationDate(value: Date) {
    this._expirationDate = value;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

  get activationDate(): Date {
    return this._activationDate;
  }

  set activationDate(value: Date) {
    this._activationDate = value;
  }
}
