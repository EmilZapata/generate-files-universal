import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { Op, WhereOptions } from 'sequelize';

import { STUDENT_TYPE_REPOSITORY } from '@shared/utils/constants/repositories.cst';

import type { StudentTypeRepository } from 'src/students/domain/repository/student-type.repository';
import type { TableStudentTypeDTO } from '../dto/table-student-type.dto';
import type { ITableTransfarable } from '@shared/utils/dtos/api/response/table-response.interface';

import { TableResponseDto } from '@shared/utils/dtos/api/response/table-response.res.dto';
import { StudentTypeEntity } from 'src/students/domain/entities/student-type.entity';
import { StudentTypeModel } from 'src/students/infrastructure/database/models/student-type.model';

@Injectable()
export class TableStudentTypeUseCase {
  constructor(
    @Inject(STUDENT_TYPE_REPOSITORY)
    private readonly repository: StudentTypeRepository,
  ) {}

  public async handle(dto: TableStudentTypeDTO) {
    try {
      const { elPerPage, currentPage, ...filtersDto } = dto;
      const filters = this.getFilters(filtersDto);
      const offset = (currentPage - 1) * dto.elPerPage;
      const count = await this.repository.count(filters);
      const campusesGot = await this.repository.findAll(
        elPerPage,
        offset,
        filters,
      );
      const campuses = campusesGot.map((c) => this.convertToTableData(c));

      const response: ITableTransfarable = this.generateResponse(
        count,
        campuses,
        elPerPage,
        currentPage,
      );

      return new TableResponseDto({
        message: 'Tabla entegrada con exito',
        data: response,
      });
    } catch (error) {
      console.error(
        'Error al obtener tipo de estudiante - TableStudentTypeUseCase:',
        error,
      );
      throw new BadRequestException(
        'Error al obtener tipo de estudiante',
        error.message,
      );
    }
  }

  private convertToTableData(e: StudentTypeEntity) {
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
    filters: Omit<TableStudentTypeDTO, 'elPerPage' | 'currentPage'>,
  ) {
    const { name, alias, description } = filters;
    const where: WhereOptions<StudentTypeModel> = {};

    if (alias)
      where['alias'] = { [Op.iLike]: `%${alias.toLocaleLowerCase()}%` };
    if (name) where['name'] = { [Op.iLike]: `%${name.toLocaleLowerCase()}%` };
    if (description)
      where['description'] = {
        [Op.iLike]: `%${description.toLocaleLowerCase()}%`,
      };

    return where;
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
