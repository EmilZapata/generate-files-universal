import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

import type { SendRecoverPasswordDto } from '@auth/application/dto/send-recover-password.dto';

export class SendRecoverPasswordReqDto implements SendRecoverPasswordDto {
  @ApiProperty({
    description: 'Ingresar numero de telefono',
    default: '+51 946588874',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({
    description: 'Ingresar el email',
    default: 'majozambrano@gmail.com',
  })
  @IsOptional()
  @IsString()
  email?: string;
}
