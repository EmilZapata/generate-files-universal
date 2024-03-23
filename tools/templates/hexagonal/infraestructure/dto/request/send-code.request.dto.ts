import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SendCodeReqDto {
  @ApiProperty({
    description: 'Ingresar el email',
    default: 'wilmion92@gmail.com',
  })
  @IsNotEmpty()
  @IsString()
  email: string;
}
