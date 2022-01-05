/*
 * Copyright (c) 2021 Dipesh Shrestha aka JustaDreamer
 * Github: https://github.com/JustaNormalDreamer
 */

import { EntityManager, Repository } from 'typeorm';
import { InjectManager, InjectRepository } from 'typeorm-typedi-extensions';
import { Service } from 'typedi';

export function BaseService<T>(entity: any) {
  @Service()
  abstract class BaseServiceHost {
    @InjectRepository(entity)
    protected readonly repository: Repository<T>;

    @InjectManager()
    protected readonly entityManager: EntityManager;

    public async findAll(): Promise<T[]> {
      return await this.repository.find();
    }

    public async findById(id: string): Promise<T> {
      return await this.repository.findOneOrFail(id);
    }

    public async createOrUpdate(entity: T): Promise<T> {
      return await this.entityManager.transaction(async (manager) => {
        return await this.entityManager.save(entity);
      });
    }

    public async delete(id: string): Promise<void> {
      await this.entityManager.transaction(async (manager) => {
        await this.repository.delete(id);
      });
    }
  }

  return BaseServiceHost;
}
