import { Table__entity__(pascalCase)Dto } from "@__module__(camelCase)/application/dto/__entity__(kebabCase)/table-__entity__(kebabCase).dto";
import { ApiProperty } from '@nestjs/swagger';

export class Table__entity__(pascalCase)ReqDto implements Table__entity__(pascalCase)Dto {
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
}
