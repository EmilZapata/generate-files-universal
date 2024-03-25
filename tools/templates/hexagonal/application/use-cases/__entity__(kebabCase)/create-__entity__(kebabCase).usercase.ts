import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { __entity__(constantCase)_REPOSITORY } from '@shared/utils/constants/repositories.cst';

import type { Create__entity__(pascalCase)Dto } from '@__module__(camelCase)/application/dto/__entity__(kebabCase)/create-__entity__(kebabCase).dto';
import type { __entity__(pascalCase)Repository } from '@__module__(camelCase)/domain/repository/__entity__(kebabCase).repository';

import { CreateResponseDto } from '@shared/utils/dtos/api/response/create.res.dto';
import { __entity__(pascalCase)Entity } from '@__module__(camelCase)/domain/entities/__entity__(kebabCase).entity';
import type { IUserLogged } from '@shared/utils/interfaces/user-logged.interface';

@Injectable()
export class Create__entity__(pascalCase)UseCase {
  constructor(
    @Inject(__entity__(constantCase)_REPOSITORY)
    private readonly repository: __entity__(pascalCase)Repository,
  ) {}

  async handle(dto: Create__entity__(pascalCase)Dto, user: IUserLogged) {
    const result = await this.repository.create({ ...dto });
    const entity = new __entity__(pascalCase)Entity(result);

    try {
      return new CreateResponseDto({
        message: 'Se creo con exito!',
        data: entity,
      });
    } catch (error) {
      console.error(
        'Error al crear el registro - Create__entity__(pascalCase)UseCase:',
        error,
      );
      throw new BadRequestException(
        'Error al crear el registro',
        error.message,
      );
    }
  }
}
