import {
  Update__entity__(pascalCase)Dto,
} from "@__module__(camelCase)/application/dto/__entity__(kebabCase)/update-__entity__(kebabCase).dto";
import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

export class Update__entity__(pascalCase)ReqDto implements Update__entity__(pascalCase)Dto {
  status: boolean;
}
