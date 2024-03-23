import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import { STUDENT_TYPE_REPOSITORY } from '@shared/utils/constants/repositories.cst';

import type { StudentTypeRepository } from 'src/students/domain/repository/student-type.repository';

import { SuccessResponseDto } from 'src/shared/utils/dtos/api/response/succes.res.dto';
import { ChangeStatusReqDto } from 'src/shared/utils/dtos/api/request/activate.req.dto';

@Injectable()
export class ChangeStatusStudentTypeUseCase {
  constructor(
    @Inject(STUDENT_TYPE_REPOSITORY)
    private readonly repository: StudentTypeRepository,
  ) {}

  async handle(dto: ChangeStatusReqDto) {
    try {
      const { status, ids } = dto;

      await this.repository.changeStatus(ids, status);

      return new SuccessResponseDto({
        message: 'Se cambiaron el/los estado/estados de los registros',
        data: dto,
      });
    } catch (error) {
      console.error(
        'Error al actualizar actualizar tipo de estudiantes - ChangeStatusStudentTypeUseCase:',
        error,
      );
      throw new BadRequestException(
        'Error al actualizar tipo de estudiantes',
        error.message,
      );
    }
  }
}
