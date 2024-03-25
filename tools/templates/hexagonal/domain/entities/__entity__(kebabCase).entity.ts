import { I__entity__(pascalCase) } from '../interfaces/__entity__(kebabCase).interface'


export class __entity__(pascalCase)Entity implements I__entity__(pascalCase) {
  createdBy: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;


  constructor(partial: Partial<__entity__(pascalCase)Entity>) {
    this.createdBy = partial.createdBy;
    this.status = partial.status;
    this.createdAt = partial.createdAt;
    this.updatedAt = partial.updatedAt;
    this.deletedAt = partial.deletedAt;
  }
}
