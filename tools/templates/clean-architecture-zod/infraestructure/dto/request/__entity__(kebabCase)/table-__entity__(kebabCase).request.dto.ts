import { TableReqDtoSchema } from '@shared/utils/dtos/api/request/table.req.dto';
import { z } from 'zod';

export const Table__entity__(pascalCase)ReqDto = TableReqDtoSchema.extend({
  status: z.boolean().optional(),
  createdBy: z.number().optional(),
});

export type Table__entity__(pascalCase)ReqDtoType = z.infer<typeof Table__entity__(pascalCase)ReqDto>;
