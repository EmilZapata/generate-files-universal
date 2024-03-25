import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { __entity__(constantCase)_REPOSITORY } from '@shared/utils/constants/repositories.cst';

import type { __entity__(pascalCase)Repository } from '@__module__(camelCase)/domain/repository/__entity__(kebabCase).repository';

import { SuccessResponseDto } from '@shared/utils/dtos/api/response/succes.res.dto';
import { __entity__(pascalCase)Entity } from '@__module__(camelCase)/domain/entities/__entity__(kebabCase).entity';

@Injectable()
export class FindOne__entity__(pascalCase)UseCase {
  constructor(
    @Inject(__entity__(constantCase)_REPOSITORY)
    private readonly repository: __entity__(pascalCase)Repository,
  ) {}

  async handle(id: number) {
    try {
      const result = await this.repository.findOne(id);
      const entity = new __entity__(pascalCase)Entity(result);

      return new SuccessResponseDto({
        message: 'Datos encontrados',
        data: entity,
      });
    } catch (error) {
      console.error(
        `Error en buscar el registro- FindOne__entity__(pascalCase)UseCase:`,
        error,
      );
      throw new BadRequestException(
        'Error en buscar el registro',
        error.message,
      );
    }
  }
}
