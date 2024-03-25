import { Table__entity__(pascalCase)DTO } from "@__module__(camelCase)/application/dto/__entity__(kebabCase)/find-__entity__(kebabCase).dto";
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class Table__entity__(pascalCase)ReqDto implements Table__entity__(pascalCase)DTO {
  @ApiProperty({
    description: 'Página actual',
    default: 1,
  })
  currentPage: number;

  @ApiProperty({
    description: 'Tamaño de filas x página',
    default: 10,
  })
  elPerPage: number;

  @ApiProperty({
    description: 'Estado del Curso',
    default: true,
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  status: boolean;

  @ApiProperty({
    description: 'El id del usuario que creo el Curso',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  createdBy: number;
}
