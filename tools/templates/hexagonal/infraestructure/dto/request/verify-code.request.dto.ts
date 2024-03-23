import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import type { VerifyCodeDto } from '@auth/application/dto/verify-code.dto';

export class VerifyCodeReqDto implements VerifyCodeDto {
  @ApiProperty({
    description: 'Ingresar el email',
    default: 'majozambrano@gmail.com',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    description: 'Ingresar el codigo',
    default: '4480',
  })
  @IsNotEmpty()
  @IsString()
  code: string;
}
