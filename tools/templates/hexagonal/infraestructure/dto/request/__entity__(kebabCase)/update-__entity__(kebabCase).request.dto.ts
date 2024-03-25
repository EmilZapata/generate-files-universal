import { Update__entity__(pascalCase)Dto } from "@__module__(camelCase)/application/dto/__entity__(kebabCase)/update-__entity__(kebabCase).dto";
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class Update__entity__(pascalCase)ReqDto implements Update__entity__(pascalCase)Dto {
  @ApiProperty({
    description: 'Estado del Course',
    default: true,
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  status: boolean;
}
