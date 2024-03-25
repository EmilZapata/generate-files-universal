import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { __entity__(constantCase)_REPOSITORY } from '@shared/utils/constants/repositories.cst';

import type { __entity__(pascalCase)Repository } from '@__module__(camelCase)/domain/repository/__entity__(kebabCase).repository';

import { SuccessResponseDto } from '@shared/utils/dtos/api/response/succes.res.dto';
import type { IUserLogged } from '@shared/utils/interfaces/user-logged.interface';

@Injectable()
export class Delete__entity__(pascalCase)UseCase {
  constructor(
    @Inject(__entity__(constantCase)_REPOSITORY)
    private readonly repository: __entity__(pascalCase)Repository,
  ) {}

  async handle(id: number, userLogged: IUserLogged) {
    try {
      this.repository.delete(id);

      return new SuccessResponseDto({
        message: 'Se elimino con exito!',
        data: null,
      });
    } catch (error) {
      console.error(
        'Error al eliminar el registro - Delete__entity__(pascalCase)UseCase:',
        error,
      );
      throw new BadRequestException(
        'Error al eliminar el registro',
        error.message,
      );
    }
  }
}
