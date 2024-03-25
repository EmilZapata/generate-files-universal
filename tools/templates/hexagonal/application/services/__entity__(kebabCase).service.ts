import { Injectable } from "@nestjs/common";

import type { ChangeStatusReqDto } from "@shared/utils/dtos/api/request/activate.req.dto";
import type { IUserLogged } from "@shared/utils/interfaces/user-logged.interface";
import type { Create__entity__(pascalCase)Dto } from "@__module__(camelCase)/application/dto/__entity__(kebabCase)/create-__entity__(kebabCase).dto";
import type { Table__entity__(pascalCase)Dto } from "@__module__(camelCase)/application/dto/__entity__(kebabCase)/table-__entity__(kebabCase).dto";

import { ChangeStatus__entity__(pascalCase)UseCase } from "../use-cases/__entity__(kebabCase)/change-status-__entity__(kebabCase).usercase";
import { Create__entity__(pascalCase)UseCase } from "../use-cases/__entity__(kebabCase)/create-__entity__(kebabCase).usercase";
import { Delete__entity__(pascalCase)UseCase } from "../use-cases/__entity__(kebabCase)/delete-__entity__(kebabCase).usercase";
import { FindOne__entity__(pascalCase)UseCase } from "../use-cases/__entity__(kebabCase)/find-one-__entity__(kebabCase).usercase";
import { Select__entity__(pascalCase)UseCase } from "../use-cases/__entity__(kebabCase)/select-__entity__(kebabCase).usercase";
import { Table__entity__(pascalCase)UseCase } from "../use-cases/__entity__(kebabCase)/table-__entity__(kebabCase).usercase";
import { Update__entity__(pascalCase)UseCase } from "../use-cases/__entity__(kebabCase)/update-__entity__(kebabCase).usercase";
import { SelectQueryDto } from '@shared/utils/dtos/query-select/select-query.dto';

@Injectable()
export class __entity__(pascalCase)Service {
  constructor(
    private readonly changeStatusUseCase: ChangeStatus__entity__(pascalCase)UseCase,
    private readonly create__entity__(pascalCase)UseCase: Create__entity__(pascalCase)UseCase,
    private readonly update__entity__(pascalCase)UseCase: Update__entity__(pascalCase)UseCase,
    private readonly delete__entity__(pascalCase)UseCase: Delete__entity__(pascalCase)UseCase,
    private readonly findOne__entity__(pascalCase)UseCase: FindOne__entity__(pascalCase)UseCase,
    private readonly table__entity__(pascalCase)UseCase: Table__entity__(pascalCase)UseCase,
    private readonly select__entity__(pascalCase)UseCase: Select__entity__(pascalCase)UseCase,
  ) {}

  async getSelect(query?: SelectQueryDto) {
    return await this.select__entity__(pascalCase)UseCase.handle(query.search);
  }

  public async getTable(dto: Table__entity__(pascalCase)Dto) {
    return await this.table__entity__(pascalCase)UseCase.handle(dto);
  }

  public async findOne__entity__(pascalCase)(id: number) {
    return await this.findOne__entity__(pascalCase)UseCase.handle(id);
  }

  public async create__entity__(pascalCase)(dto: Partial<Create__entity__(pascalCase)Dto>, userLogged: IUserLogged) {
    return await this.create__entity__(pascalCase)UseCase.handle(dto, userLogged);
  }

  public async update__entity__(pascalCase)(
    id: number,
    dto: Partial<Create__entity__(pascalCase)Dto>,
    userLogged?: IUserLogged
  ) {
    return await this.update__entity__(pascalCase)UseCase.handle(id, dto, userLogged);
  }

  public async changeStatus(dto: ChangeStatusReqDto, userLogged: IUserLogged) {
    return await this.changeStatusUseCase.handle(dto, userLogged);
  }

  public async delete__entity__(pascalCase)(id: number, userLogged?: IUserLogged) {
    return await this.delete__entity__(pascalCase)UseCase.handle(id, userLogged);
  }
}
