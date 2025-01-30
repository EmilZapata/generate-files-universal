import { Update__entity__(pascalCase)Dto } from '@__module__(camelCase)/application/dto/__entity__(kebabCase)/update-__entity__(kebabCase).dto';
import { z } from 'zod';

export const Update__entity__(pascalCase)ReqDtoSchema = Update__entity__(pascalCase)Dto.extend({
  status: z.boolean().optional(),
});
export type Update__entity__(pascalCase)ReqDtoType = z.infer<typeof Update__entity__(pascalCase)ReqDtoSchema>;
