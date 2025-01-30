import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { __entity__(constantCase)_REPOSITORY } from '@shared/utils/constants/repositories.cst';

import type { __entity__(pascalCase)Repository } from '@__module__(camelCase)/domain/repository/__entity__(kebabCase).repository';

import { SuccessResponseDto } from '@shared/utils/dtos/api/response/succes.res.dto';
import { ChangeStatusReqDtoType } from '@shared/utils/dtos/api/request/activate.req.dto';
//import type { IUserLogged } from '@shared/utils/interfaces/user-logged.interface';

@Injectable()
export class ChangeStatus__entity__(pascalCase)UseCase {
  constructor(
    @Inject(__entity__(constantCase)_REPOSITORY) private repository: __entity__(pascalCase)Repository
  ) {}

  // async handle(dto: ChangeStatusReqDtoType, userLogged: IUserLogged) {
  async handle(dto: ChangeStatusReqDtoType) {
    try {
      const { status, ids } = dto;
      await this.repository.changeStatus(ids, status);

      return new SuccessResponseDto({ 
        message: 'Se cambiaron el/los estado/estados de los registros',
        data: dto,
      });
    } catch (error) {
      console.error(
        'Error al actualizar los estad(s) de los registros - ChangeStatus__entity__(pascalCase)UseCase:',
        error,
      );
      throw new BadRequestException(
        'Error al actualizar los registros',
        error.message,
      );
    }
  }
}
