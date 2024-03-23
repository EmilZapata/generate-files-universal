import { __entity__(pascalCase)Model } from '@__module__(camelCase)/infraestructure/database/model/__entity__.model';
import { FindOneOptions, FindManyOptions } from 'typeorm';

export interface __entity__(pascalCase)Repository {
  countElements(filters?: FindManyOptions<__entity__(pascalCase)Model[]>): Promise<number>;
  
  findAll(options: FindManyOptions): Promise<__entity__(pascalCase)Model[]>
  findOne(options: FindOneOptions): Promise<__entity__(pascalCase)Model>
  create__entity__(pascalCase)(body: Partial<I__entity__(pascalCase)>): Promise<__entity__(pascalCase)Model>;
  
  update__entity__(pascalCase)(id: number, body: Partial<I__entity__(pascalCase)>): Promise<any>;
  delete__entity__(pascalCase)(id: number): Promise<__entity__(pascalCase)Model>;
  changeStatus(ids: number[], status: boolean): void;
}
