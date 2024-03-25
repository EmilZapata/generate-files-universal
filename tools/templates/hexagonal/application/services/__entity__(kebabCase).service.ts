import { Injectable } from "@nestjs/common";

import type { ChangeStatusReqDto } from "@shared/utils/dtos/api/request/activate.req.dto";
import type { IUserLogged } from "@shared/utils/interfaces/user-logged.interface";
import type { Create__entity__(pascalCase)DTO } from "../dto/create-__entity__(kebabCase).dto";
import type { Table__entity__(pascalCase)DTO } from "../dto/table-__entity__(kebabCase).dto";

import { ChangeStatus__entity__(pascalCase)UseCase } from "../use-cases/change-status-__entity__(kebabCase).usecase";
import { Create__entity__(pascalCase)UseCase } from "../use-cases/create-__entity__(kebabCase).usecase";
import { Delete__entity__(pascalCase)UseCase } from "../use-cases/delete-__entity__(kebabCase).usecase";
import { FindOne__entity__(pascalCase)UseCase } from "../use-cases/find-one-__entity__(kebabCase).usecase";
import { Select__entity__(pascalCase)UseCase } from "../use-cases/select-__entity__(kebabCase).usecase";
import { Table__entity__(pascalCase)UseCase } from "../use-cases/table-__entity__(kebabCase).usecase";
import { Update__entity__(pascalCase)UseCase } from "../use-cases/update-__entity__(kebabCase).usecase";

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

  async getSelect(query?: Select__entity__(pascalCase)QueryDto) {
    return await this.select__entity__(pascalCase)UseCase.handle(query);
  }

  public async getTable(dto: Table__entity__(pascalCase)DTO) {
    return await this.table__entity__(pascalCase)UseCase.handle(dto);
  }

  public async findOne__entity__(pascalCase)(id: number) {
    return await this.findOne__entity__(pascalCase)UseCase.handle(id);
  }

  public async create__entity__(pascalCase)(dto: Create__entity__(pascalCase)DTO, userId: number) {
    return await this.create__entity__(pascalCase)UseCase.handle(dto, userId);
  }

  public async update__entity__(pascalCase)(
    id: number,
    dto: Partial<Create__entity__(pascalCase)DTO>,
    userLogged?: IUserLogged
  ) {
    return await this.update__entity__(pascalCase)UseCase.handle(id, dto, userLogged);
  }

  public async changeStatus(dto: ChangeStatusReqDto, userId: number) {
    return await this.changeStatusUseCase.handle(dto, userId);
  }

  public async delete__entity__(pascalCase)(id: number, userLogged?: IUserLogged) {
    return await this.delete__entity__(pascalCase)UseCase.handle(id, userLogged);
  }
}
