import type { I__entity__(pascalCase) } from "@__module__(camelCase)/domain/interfaces/__entity__(kebabCase).interface";

export interface Create__entity__(pascalCase)Dto
  extends Omit<
    I__entity__(pascalCase),
    | 'id'
    | 'status'
    | 'created_at'
    | 'updated_at'
    | 'deleted_at'
    | 'created_by'
  > {}
