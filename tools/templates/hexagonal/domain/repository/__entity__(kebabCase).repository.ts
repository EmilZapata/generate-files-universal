import { __entity__(pascalCase)Model } from '@__module__(camelCase)/infraestructure/database/models/__entity__(kebabCase).model';
import { FindOneOptions, FindManyOptions, DeleteResult } from 'typeorm';
import { I__entity__(pascalCase) } from '@__module__(camelCase)/domain/interfaces/__entity__(kebabCase).interface';

export interface __entity__(pascalCase)Repository {
  countElements(filters?: FindManyOptions<__entity__(pascalCase)Model>): Promise<number>;
  
  findAll(options: FindManyOptions<__entity__(pascalCase)Model>): Promise<__entity__(pascalCase)Model[]>
  findOne(options: FindOneOptions): Promise<__entity__(pascalCase)Model>
  create(body: Partial<I__entity__(pascalCase)>): Promise<__entity__(pascalCase)Model>;
  
  update(id: number, body: Partial<I__entity__(pascalCase)>): Promise<__entity__(pascalCase)Model>;
  delete(id: number): Promise<DeleteResult>;
  changeStatus(ids: number[], status: boolean): void;
}
