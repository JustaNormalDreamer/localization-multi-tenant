/*
 * Copyright (c) 2021 Dipesh Shrestha aka JustaDreamer
 * Github: https://github.com/JustaNormalDreamer
 */

import { License } from './License.entity';

export class LicenseRequest implements Partial<License> {
  private _code: string;

  private _expirationDate: Date;

  private _isActive: boolean;

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
