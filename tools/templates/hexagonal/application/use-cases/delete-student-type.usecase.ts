import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { STUDENT_TYPE_REPOSITORY } from '@shared/utils/constants/repositories.cst';

import type { StudentTypeRepository } from 'src/students/domain/repository/student-type.repository';

import { SuccessResponseDto } from '@shared/utils/dtos/api/response/succes.res.dto';

@Injectable()
export class DeleteStudentTypeUseCase {
  constructor(
    @Inject(STUDENT_TYPE_REPOSITORY)
    private readonly repository: StudentTypeRepository,
  ) {}

  async handle(id: number) {
    try {
      this.repository.delete(id);

      return new SuccessResponseDto({
        message: 'Se elimino con exito!',
        data: null,
      });
    } catch (error) {
      console.error(
        'Error al eliminar tipo de estudiante - DeleteStudentTypeUseCase:',
        error,
      );
      throw new BadRequestException(
        'Error al eliminar tipo de estudiante',
        error.message,
      );
    }
  }
}
