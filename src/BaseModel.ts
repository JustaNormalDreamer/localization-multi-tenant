import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
/*
 * Copyright (c) 2021 Dipesh Shrestha aka JustaDreamer
 * Github: https://github.com/JustaNormalDreamer
 */

export abstract class BaseModel {
  @PrimaryGeneratedColumn('uuid')
  protected _id: string;

  @CreateDateColumn()
  protected _createdAt: Date;

  @UpdateDateColumn()
  protected _updatedAt: Date;

  @DeleteDateColumn()
  protected _deletedAt: Date;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  set updatedAt(value: Date) {
    this._updatedAt = value;
  }

  get deletedAt(): Date {
    return this._deletedAt;
  }

  set deletedAt(value: Date) {
    this._deletedAt = value;
  }
}
