import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { STUDENT_TYPE_REPOSITORY } from 'src/shared/utils/constants/repositories.cst';

import type { StudentTypeRepository } from 'src/students/domain/repository/student-type.repository';

import { SelectEntity } from 'src/shared/utils/entities/select.entity';
import { ResponseDto } from 'src/shared/utils/dtos/api/response/response.res.dto';
import { Op, WhereOptions } from 'sequelize';
import { StudentTypeModel } from 'src/students/infrastructure/database/models/student-type.model';

@Injectable()
export class SelectStudentTypeUseCase {
  constructor(
    @Inject(STUDENT_TYPE_REPOSITORY)
    private readonly repository: StudentTypeRepository,
  ) {}

  public async handle(search?: string) {
    try {
      const where: WhereOptions<StudentTypeModel> = {};

      if (search) {
        where[Op.or] = [
          { alias: { [Op.iLike]: `%${search.toLocaleLowerCase()}%` } },
          { name: { [Op.iLike]: `%${search.toLocaleLowerCase()}%` } },
        ];
      }

      const allElements = await this.repository.findAll(10, 0, where);
      const data = allElements.map((c) => this.transformToSelect(c));

      return new ResponseDto({
        message: 'Select obtenido!',
        data,
      });
    } catch (error) {
      console.error(
        'Error al obtener tipos de estudiante - SelectStudentTypeUseCase:',
        error,
      );
      throw new BadRequestException(
        'Error al obtener tipos de estudiante',
        error.message,
      );
    }
  }

  private transformToSelect(c: StudentTypeModel) {
    const select = new SelectEntity({
      id: c.id,
      name: c.name,
    });

    return select;
  }
}
