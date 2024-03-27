import { __entity__(pascalCase)Model } from '@__module__(camelCase)/infraestructure/database/models/__entity__(kebabCase).model';
import { FindOneOptions, FindManyOptions, DeleteResult } from 'typeorm';
import { I__entity__(pascalCase) } from '@__module__(camelCase)/domain/interfaces/__entity__(kebabCase).interface';

export interface __entity__(pascalCase)Repository {
  countElements(filters?: FindManyOptions<__entity__(pascalCase)Model>): Promise<number>;
  
  findAll(options: FindManyOptions<__entity__(pascalCase)Model>): Promise<I__entity__(pascalCase)[]>
  findOne(options: FindOneOptions<__entity__(pascalCase)Model>): Promise<I__entity__(pascalCase)>
  create(body: Partial<I__entity__(pascalCase)>): Promise<I__entity__(pascalCase)>;
  
  update(id: number, body: Partial<I__entity__(pascalCase)>): Promise<I__entity__(pascalCase)>;
  delete(id: number): Promise<DeleteResult>;
  changeStatus(ids: number[], status: boolean): void;
}
