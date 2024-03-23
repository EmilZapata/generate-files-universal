import { I__entity__(pascalCase) } from '../interfaces/__entity__(kebabCase).interface'


export class __entity__(pascalCase)Entity implements I__entity__(pascalCase) {
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;


  constructor(partial: Partial<__entity__(pascalCase)Entity>) {
    this.created_at = partial.created_at;
    this.updated_at = partial.updated_at;
    this.deleted_at = partial.deleted_at;
  }
}
