import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { STUDENT_TYPE_REPOSITORY } from '@shared/utils/constants/repositories.cst';

import type { CreateStudentTypeDto } from '../dto/create-student-type.dto';
import type { StudentTypeRepository } from 'src/students/domain/repository/student-type.repository';

import { CreateResponseDto } from '@shared/utils/dtos/api/response/create.res.dto';
import { StudentTypeEntity } from 'src/students/domain/entities/student-type.entity';

@Injectable()
export class CreateStudentTypeUseCase {
  constructor(
    @Inject(STUDENT_TYPE_REPOSITORY)
    private readonly repository: StudentTypeRepository,
  ) {}

  async handle(dto: CreateStudentTypeDto) {
    const result = await this.repository.create({ ...dto });
    const entity = new StudentTypeEntity(result);

    try {
      return new CreateResponseDto({
        message: 'Se creo con exito!',
        data: entity,
      });
    } catch (error) {
      console.error(
        'Error al crear tipo de estudiantes - CreateStudentTypeUseCase:',
        error,
      );
      throw new BadRequestException(
        'Error al crear tipo de estudiantes',
        error.message,
      );
    }
  }
}
