import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { STUDENT_TYPE_REPOSITORY } from '@shared/utils/constants/repositories.cst';

import type { StudentTypeRepository } from 'src/students/domain/repository/student-type.repository';

import { SuccessResponseDto } from '@shared/utils/dtos/api/response/succes.res.dto';
import { StudentTypeEntity } from 'src/students/domain/entities/student-type.entity';

@Injectable()
export class FindOneStudentTypeUseCase {
  constructor(
    @Inject(STUDENT_TYPE_REPOSITORY)
    private readonly repository: StudentTypeRepository,
  ) {}

  async handle(id: number) {
    try {
      const result = await this.repository.findOne(id);
      const entity = new StudentTypeEntity(result);

      return new SuccessResponseDto({
        message: 'Datos encontrados',
        data: entity,
      });
    } catch (error) {
      console.error(
        `Error en buscar tipo de estudiante - FindOneStudentTypeUseCase:`,
        error,
      );
      throw new BadRequestException(
        'Error en buscar tipo de estudiante',
        error.message,
      );
    }
  }
}
