import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ChangePasswordReqDto {
  @ApiProperty({
    description: 'Contrasena',
    default: 'micontra123',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
