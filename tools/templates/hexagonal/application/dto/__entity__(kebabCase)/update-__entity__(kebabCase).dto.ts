import type { I__entity__(pascalCase) } from "@__module__(camelCase)/domain/interfaces/__entity__(kebabCase).interface";

export interface Update__entity__(pascalCase)Dto
  extends Omit<
    I__entity__(pascalCase),
    | 'id'
    | 'status'
    | 'createdAt'
    | 'updatedAt'
    | 'deletedAt'
    | 'createdBy'
  > {}
