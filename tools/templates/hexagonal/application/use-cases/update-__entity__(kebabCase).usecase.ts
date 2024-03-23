import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { STUDENT_TYPE_REPOSITORY } from '@shared/utils/constants/repositories.cst';

import type { StudentTypeRepository } from 'src/students/domain/repository/student-type.repository';
import type { CreateStudentTypeDto } from '../dto/create-student-type.dto';

import { SuccessResponseDto } from '@shared/utils/dtos/api/response/succes.res.dto';
import { StudentTypeEntity } from 'src/students/domain/entities/student-type.entity';

@Injectable()
export class UpdateStudentTypeUseCase {
  constructor(
    @Inject(STUDENT_TYPE_REPOSITORY)
    private readonly repository: StudentTypeRepository,
  ) {}

  async handle(id: number, dto: Partial<CreateStudentTypeDto>) {
    const result = await this.repository.update(id, { ...dto });
    const entity = new StudentTypeEntity(result);

    try {
      return new SuccessResponseDto({
        message: 'Se actualizo con exito!',
        data: entity,
      });
    } catch (error) {
      console.error(
        'Error al actualizar tipo de estudiantes - UpdateStudentTypeUseCase:',
        error,
      );
      throw new BadRequestException(
        'Error al actualizar tipo de estudiantes',
        error.message,
      );
    }
  }
}
