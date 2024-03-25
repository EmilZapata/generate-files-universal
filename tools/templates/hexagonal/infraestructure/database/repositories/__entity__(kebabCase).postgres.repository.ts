import { BadRequestException, Injectable } from "@nestjs/common";

import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository, UpdateResult } from 'typeorm';


import { I__entity__(pascalCase) } from "@__module__(camelCase)/domain/interfaces/__entity__(kebabCase).interface";
import { __entity__(pascalCase)Repository } from "@__module__(camelCase)/domain/repository/__entity__(kebabCase).repository";
import { __entity__(pascalCase)Model } from "../model/__entity__(kebabCase).model";
import { DatabaseInterface } from "@shared/utils/interfaces/database.interface";
import { SequelizeUtils } from "@shared/utils/functions/sequelize-utils.function";
import { ErrorResponseDto } from "@shared/utils/dtos/api/response/error.res.dto";

@Injectable()
export class __entity__(pascalCase)PostgresRepository implements __entity__(pascalCase)Repository {
  constructor(
    @InjectRepository(__entity__(pascalCase)Model) private __entity__(camelCase)Repository: Repository<__entity__(pascalCase)Model>
  ) {}

  public countElements(
    filters?: FindManyOptions<__entity__(pascalCase)Model>
  ): Promise<number> {
    try {
      // const findOptions = SequelizeUtils.getFindOptions<__entity__(pascalCase)Model>(filters);
      return this.__entity__(camelCase)Repository.count(filters);
    } catch (error) {
      throw new BadRequestException("Error al obtener cantidad de elementos de __entity__(sentenceCase)(s):", error);
    }
  }

  create__entity__(pascalCase)(body: Partial<I__entity__(pascalCase)>) {
    try {
      const entity = this.__entity__(camelCase)Repository.create(body);
      return await this.__entity__(camelCase)Repository.save(entity);
    } catch (error) {
      throw new ErrorResponseDto({
        ...error,
        message: "Error al crear __entity__(sentenceCase)",
        origin: "__entity__(pascalCase)PostgresRepository.create__entity__(pascalCase)",
      });
    }
  }
  findAll(
    filters: FindManyOptions<__entity__(pascalCase)Model>
  ): Promise<__entity__(pascalCase)[]> {
    try {
      return this.__entity__(camelCase)Repository.find(filters);
    } catch (error) {
      throw new ErrorResponseDto({
        ...error,
        message:
          "findAll -  error con los parametros para buscar __entity__(pascalCase)(s)",
        origin: "__entity__(pascalCase)PostgresRepository.findAll",
      });
    }
  }

  findOne(id: number): Promise<__entity__(pascalCase)> {
    try {
      return  this.__entity__(camelCase)Repository.findOne({
        where: { id },
      });
    } catch (error) {
      throw new BadRequestException("Error al buscar __entity__(pascalCase):", error);
    }
  }
  async update__entity__(pascalCase)(id: number, changes: Partial<I__entity__(pascalCase)>): Promise<boolean> {
    try {
      const __entity__(camelCase) = await this.__entity__(camelCase)Repository.findOne({ where: { id } });

      this.__entity__(camelCase)Repository.merge(__entity__(camelCase), changes);
      return this.__entity__(camelCase)Repository.save(__entity__(camelCase));
    } catch (error) {
      throw new BadRequestException("Error al actualizar __entity__(pascalCase):", error);
    }
  }

  async delete__entity__(pascalCase)(id: number): Promise<__entity__(pascalCase)> {
    try {
      const objFind = await this.__entity__(camelCase)Repository.findOne({
        where: { id },
      });

      await this.__entity__(camelCase)Repository.delete(id);

      return objFind;
    } catch (error) {
      throw new BadRequestException("Error al eliminar __entity__(pascalCase):", error);
    }
  }

  public async changeStatus(ids: number[], status: boolean) {
    try {
      let entities = await this.__entity__(camelCase)Repository.findBy({
        id: In([ids])
      });
      entities = entities.map(entity => ({...entity, status}));

      return this.__entity__(camelCase)Repository.save(entities)
    } catch (error) {
      throw new BadRequestException(
        "Error al actualizar estados - __entity__(pascalCase)(s):",
        error
      );
    }
  }
}
