import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { __entity__(constantCase)_REPOSITORY } from '@shared/utils/constants/repositories.cst';

import type { __entity__(pascalCase)Repository } from '@__module__(camelCase)/domain/repository/__entity__(kebabCase).repository';

import { SelectEntity } from '@shared/utils/entities/select.entity';
import { ResponseDto } from '@shared/utils/dtos/api/response/response.res.dto';
import { __entity__(pascalCase)Model } from '@__module__(camelCase)/infraestructure/database/models/__entity__(kebabCase).model';

@Injectable()
export class Select__entity__(pascalCase)UseCase {
  constructor(
    @Inject(__entity__(constantCase)_REPOSITORY)
    private readonly repository: __entity__(pascalCase)Repository,
  ) {}

  public async handle(search?: string) {
    try {
      const where: WhereOptions<__entity__(pascalCase)Model> = {};

      if (search) {
        // where[Op.or] = [
          // { alias: { [Op.iLike]: `%${search.toLocaleLowerCase()}%` } },
          // { name: { [Op.iLike]: `%${search.toLocaleLowerCase()}%` } },
        // ];
      }

      const allElements = await this.repository.findAll(10, 0, where);
      const data = allElements.map((c) => this.transformToSelect(c));

      return new ResponseDto({
        message: 'Select obtenido!',
        data,
      });
    } catch (error) {
      console.error(
        'Error al obtener los datos del Select - Select__entity__(pascalCase)UseCase:',
        error,
      );
      throw new BadRequestException(
        'Error al obtener los datos del Select',
        error.message,
      );
    }
  }

  private transformToSelect(c: __entity__(pascalCase)Model) {
    const select = new SelectEntity({
      id: c.id,
      name: c.name,
    });

    return select;
  }
}
