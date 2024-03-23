import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ChangePasswordUserReqDto {
  @ApiProperty({
    description: 'Antigua contra',
    default: 'micontra123',
  })
  @IsNotEmpty()
  @IsString()
  oldPassword: string;

  @ApiProperty({
    description: 'Contrasena',
    default: 'micontra123',
  })
  @IsNotEmpty()
  @IsString()
  newPassword: string;
}
