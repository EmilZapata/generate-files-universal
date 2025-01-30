import { TableReqDtoSchema } from '@shared/utils/dtos/api/request/table.req.dto';
import { z } from 'zod';

export const Table__entity__(pascalCase)DtoSchema = TableReqDtoSchema.extend({});
export type Table__entity__(pascalCase)DtoType = z.infer<typeof Table__entity__(pascalCase)DtoSchema>;
