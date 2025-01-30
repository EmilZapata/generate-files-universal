import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { FindManyOptions } from 'typeorm';

import { __entity__(constantCase)_REPOSITORY } from '@shared/utils/constants/repositories.cst';

import type { __entity__(pascalCase)Repository } from '@__module__(camelCase)/domain/repository/__entity__(kebabCase).repository';
import type { Table__entity__(pascalCase)Dto } from '@__module__(camelCase)/application/dto/__entity__(kebabCase)/table-__entity__(kebabCase).dto';
import type { ITableTransfarable } from '@shared/utils/dtos/api/response/table-response.interface';

import { TableResponseDto } from '@shared/utils/dtos/api/response/table-response.res.dto';
import { __entity__(pascalCase)Entity } from '@__module__(camelCase)/domain/entities/__entity__(kebabCase).entity';
import { __entity__(pascalCase)Model } from '@__module__(camelCase)/infraestructure/database/models/__entity__(kebabCase).model';
import { I__entity__(pascalCase) } from '@__module__(camelCase)/domain/interfaces/__entity__(kebabCase).interface';

@Injectable()
export class Table__entity__(pascalCase)UseCase {
  constructor(
    @Inject(__entity__(constantCase)_REPOSITORY)
    private readonly repository: __entity__(pascalCase)Repository,
  ) {}

  public async handle(dto: Table__entity__(pascalCase)Dto) {
    try {
      const { elPerPage, currentPage, ...filtersDto } = dto;
      const filters = this.getFilters(filtersDto);
      const offset = (currentPage - 1) * dto.elPerPage;
      const count = await this.repository.countElements(filters);
      const listResult = await this.repository.findAll({
        take: elPerPage,
        skip: offset,
        ...filters}      );
      const entites = listResult.map((c) => this.convertToTableData(c));

      const response: ITableTransfarable = this.generateResponse(
        count,
        entites,
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

  private convertToTableData(entity: I__entity__(pascalCase)): __entity__(pascalCase)Entity {
    const result = new __entity__(pascalCase)Entity(entity)
    return result;
  }

  private getFilters(
    filters: Omit<Table__entity__(pascalCase)Dto, 'elPerPage' | 'currentPage'>,
  ):FindManyOptions<__entity__(pascalCase)Model> {
    const { createdBy, status } = filters;
    const where: FindOptionsWhere<__entity__(pascalCase)Model> = {};

    if (createdBy) where.createdBy = createdBy;
    if (status === true || status === false) where.status = status;

    return {
      where,
    };
  }

  private generateResponse(
    count: number,
    entities: object[],
    elPerPage: number,
    currentPage: number,
  ) {
    return {
      currentPage,
      elPerPage,
      totalElements: count,
      data: entities,
      totalPages: Math.floor(count / elPerPage) + 1,
    };
  }
}
