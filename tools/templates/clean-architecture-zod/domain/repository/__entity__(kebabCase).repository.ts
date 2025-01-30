import { __entity__(pascalCase)Type } from '@__module__(camelCase)/domain/interfaces/__entity__(kebabCase).interface';
import { __entity__(pascalCase)Model } from '@__module__(camelCase)/infraestructure/database/models/__entity__(kebabCase).model';
import { DeleteResult, FindManyOptions, FindOneOptions } from 'typeorm';

export interface __entity__(pascalCase)Repository {
  countElements(filters?: FindManyOptions<__entity__(pascalCase)Model>): Promise<number>;
  
  findAll(options: FindManyOptions<__entity__(pascalCase)Model>): Promise<__entity__(pascalCase)Type[]>
  findOne(options: FindOneOptions<__entity__(pascalCase)Model>): Promise<__entity__(pascalCase)Type>
  create(body: Partial<__entity__(pascalCase)Type>): Promise<__entity__(pascalCase)Type>;
  
  update(id: number, body: Partial<__entity__(pascalCase)Type>): Promise<__entity__(pascalCase)Type>;
  delete(id: number): Promise<DeleteResult>;
  changeStatus(ids: number[], status: boolean): void;
}
