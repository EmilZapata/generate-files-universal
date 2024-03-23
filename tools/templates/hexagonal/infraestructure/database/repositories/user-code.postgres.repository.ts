import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import type { UserCodeRepository } from '@auth/domain/repository/user-code.repository';

import { UserCodeModel } from '../model/user-code.model';

@Injectable()
export class UserCodePostgresRepository implements UserCodeRepository {
  constructor(
    @InjectModel(UserCodeModel) private model: typeof UserCodeModel,
  ) {}

  public async findByUserId(userId: number): Promise<UserCodeModel> {
    try {
      const result = await this.model.findOne({ where: { user_id: userId } });

      return result;
    } catch (error) {
      throw new BadRequestException('Error obtener codigo de usuario', error);
    }
  }

  public async create(
    code: string,
    userId: number,
    email: string,
  ): Promise<UserCodeModel> {
    try {
      const dto = { user_id: userId, email, code };
      const result = await this.model.create(dto);

      return result;
    } catch (error) {
      throw new BadRequestException('Error al crear codigo de usuario', error);
    }
  }

  public async update(
    code: string,
    userId: number,
    email: string,
  ): Promise<UserCodeModel> {
    try {
      const dto = { email, code };

      await this.model.update(dto, {
        where: { user_id: userId },
      });

      return await this.findByUserId(userId);
    } catch (error) {
      throw new BadRequestException(
        'Error al actualizar codigo de usuario',
        error,
      );
    }
  }
}
