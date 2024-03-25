import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { __entity__(constantCase)_REPOSITORY } from '@shared/utils/constants/repositories.cst';

import type { __entity__(pascalCase)Repository } from '@__module__(camelCase)/domain/repository/__entity__(kebabCase).repository';
import type { Create__entity__(pascalCase)Dto } from '../dto/create-__entity__(kebabCase).dto';

import { SuccessResponseDto } from '@shared/utils/dtos/api/response/succes.res.dto';
import { __entity__(pascalCase)Entity } from '@__module__(camelCase)/domain/entities/__entity__(kebabCase).entity';
import type { IUserLogged } from '@shared/utils/interfaces/user-logged.interface';

@Injectable()
export class Update__entity__(pascalCase)UseCase {
  constructor(
    @Inject(__entity__(constantCase)_REPOSITORY)
    private readonly repository: __entity__(pascalCase)Repository,
  ) {}

  async handle(id: number, dto: Partial<Create__entity__(pascalCase)Dto>, userLogged: IUserLogged) {
    const result = await this.repository.update(id, { ...dto });
    const entity = new __entity__(pascalCase)Entity(result);

    try {
      return new SuccessResponseDto({
        message: 'Se actualizo con exito!',
        data: entity,
      });
    } catch (error) {
      console.error(
        'Error al actualizar el registro - Update__entity__(pascalCase)UseCase:',
        error,
      );
      throw new BadRequestException(
        'Error al actualizar el registro',
        error.message,
      );
    }
  }
}
