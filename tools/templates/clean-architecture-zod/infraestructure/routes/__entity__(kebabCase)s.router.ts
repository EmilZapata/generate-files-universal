import {
  ChangeStatusReqDtoSchema,
  ChangeStatusReqDtoType,
} from "@shared/utils/dtos/api/request/activate.req.dto";
import { CreateResponseDtoSchema } from "@shared/utils/dtos/api/response/create.res.dto";
import { SuccessResponseDtoSchema } from "@shared/utils/dtos/api/response/succes.res.dto";
import { TableResponseDtoSchema } from "@shared/utils/dtos/api/response/table-response.res.dto";
import {
  SelectQueryDtoSchema,
  SelectQueryDtoType,
} from "@shared/utils/dtos/query-select/select-query.dto";
import {
  Table__entity__(pascalCase)DtoSchema,
  Table__entity__(pascalCase)DtoType,
} from "@__module__(camelCase)/application/dto/__entity__(kebabCase)/table-__entity__(kebabCase).dto";
import { __entity__(pascalCase)Service } from "@__module__(camelCase)/application/services/__entity__(kebabCase).service";
import {
  Create__entity__(pascalCase)ReqDtoSchema,
  Create__entity__(pascalCase)ReqDtoType,
} from "@__module__(camelCase)/infraestructure/dto/request/__entity__(kebabCase)/create-__entity__(kebabCase).request.dto";
import {
  Update__entity__(pascalCase)ReqDtoSchema,
  Update__entity__(pascalCase)ReqDtoType,
} from "@__module__(camelCase)/infraestructure/dto/request/__entity__(kebabCase)/update-__entity__(kebabCase).request.dto";
import { Input, Mutation, Query, Router } from "nestjs-trpc";
import { z } from "zod";

@Router({
  alias: "__entity__(kebabCase)s",
})
export class __entity__(pascalCase)sRouter {
  constructor(private readonly service: __entity__(pascalCase)Service) {}

  @Query({
    input: SelectQueryDtoSchema,
  })
  async select(@Input() query: SelectQueryDtoType) {
    return this.service.getSelect(query);
  }

  @Query({
    input: Table__entity__(pascalCase)DtoSchema,
    output: TableResponseDtoSchema,
  })
  async table(@Input() body: Table__entity__(pascalCase)DtoType) {
    return this.service.getTable(body);
  }

  @Query({
    input: z.object({ id: z.number() }),
    output: SuccessResponseDtoSchema,
  })
  async findById(@Input("id") id: number) {
    return this.service.findOne__entity__(pascalCase)(id);
  }

  @Mutation({
    input: Create__entity__(pascalCase)ReqDtoSchema,
    output: CreateResponseDtoSchema,
  })
  create(@Input() body: Create__entity__(pascalCase)ReqDtoType) {
    return this.service.create__entity__(pascalCase)(body);
  }

  @Mutation({
    input: Update__entity__(pascalCase)ReqDtoSchema,
    output: SuccessResponseDtoSchema,
  })
  async update(@Input() body: Update__entity__(pascalCase)ReqDtoType) {
    return this.service.update__entity__(pascalCase)(body.id, body);
  }

  @Mutation({
    input: ChangeStatusReqDtoSchema,
    output: SuccessResponseDtoSchema,
  })
  async changeStatus(@Input() body: ChangeStatusReqDtoType) {
    return this.service.changeStatus(body);
  }

  @Mutation({
    input: z.object({ id: z.number() }),
    output: SuccessResponseDtoSchema,
  })
  async delete(@Input("id") id: number) {
    return this.service.delete__entity__(pascalCase)(id);
  }
}
