import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { FindManyOptions } from 'typeorm';

import { __entity__(constantCase)_REPOSITORY } from '@shared/utils/constants/repositories.cst';

import type { __entity__(pascalCase)Repository } from '@__module__(camelCase)/domain/repository/__entity__(kebabCase).repository';
import type { Table__entity__(pascalCase)DTO } from '@__module__(camelCase)/application/dto/__entity__(kebabCase)/table-__entity__(kebabCase).dto';
import type { ITableTransfarable } from '@shared/utils/dtos/api/response/table-response.interface';

import { TableResponseDto } from '@shared/utils/dtos/api/response/table-response.res.dto';
import { __entity__(pascalCase)Entity } from '@__module__(camelCase)/domain/entities/__entity__(kebabCase).entity';
import { __entity__(pascalCase)Model } from '@__module__(camelCase)/infraestructure/database/models/__entity__(kebabCase).model';

@Injectable()
export class Table__entity__(pascalCase)UseCase {
  constructor(
    @Inject(__entity__(constantCase)_REPOSITORY)
    private readonly repository: __entity__(pascalCase)Repository,
  ) {}

  public async handle(dto: Table__entity__(pascalCase)DTO) {
    try {
      const { elPerPage, currentPage, ...filtersDto } = dto;
      const filters = this.getFilters(filtersDto);
      const offset = (currentPage - 1) * dto.elPerPage;
      const count = await this.repository.countElements(filters);
      const campusesGot = await this.repository.findAll({
        take: elPerPage,
        skip: offset,
        ...filters}      );
      const campuses = campusesGot.map((c) => this.convertToTableData(c));

      const response: ITableTransfarable = this.generateResponse(
        count,
        campuses,
        elPerPage,
        currentPage,
      );

      return new TableResponseDto({
        message: 'Tabla entregada con exito',
        data: response,
      });
    } catch (error) {
      console.error(
        'Error al obtener la lista de registros - Table__entity__(pascalCase)UseCase:',
        error,
      );
      throw new BadRequestException(
        'Error al obtener la lista de registros',
        error.message,
      );
    }
  }

  private convertToTableData(e: __entity__(pascalCase)Entity) {
    const result = {
      id: e.id,
      name: e.name,
      alias: e.alias,
      description: e.description,
      status: e.status === null || Boolean(e.status),
    };

    return result;
  }

  private getFilters(
    filters: Omit<Table__entity__(pascalCase)DTO, 'elPerPage' | 'currentPage'>,
  ):FindManyOptions< __entity__(pascalCase)Model> {
    const { name, alias, description } = filters;
    const options: FindManyOptions<__entity__(pascalCase)Model> = {};

    if (alias)
      options['alias'] = { [Op.iLike]: `%${alias.toLocaleLowerCase()}%` };
    if (name) options['name'] = { [Op.iLike]: `%${name.toLocaleLowerCase()}%` };
    if (description)
      options['description'] = {
        [Op.iLike]: `%${description.toLocaleLowerCase()}%`,
      };

    return options
  }

  private generateResponse(
    count: number,
    campuses: object[],
    elPerPage: number,
    currentPage: number,
  ) {
    return {
      currentPage,
      elPerPage,
      totalElements: count,
      data: campuses,
      totalPages: Math.floor(count / elPerPage) + 1,
    };
  }
}
