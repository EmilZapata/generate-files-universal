import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

import type { LoginDto } from 'src/auth/application/dto/login.dto';

export class LoginReqDto implements LoginDto {
  @ApiProperty({
    description: 'Ingresar el username',
    default: 'user1',
  })
  @IsOptional()
  @IsString()
  username: string;

  @ApiProperty({
    description: 'Ingresar el password',
    default: '123456',
  })
  @IsOptional()
  @IsString()
  password: string;

  @ApiProperty({
    description: 'Ingresar si se matiene conectado',
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  keepConnected: boolean;

  @ApiProperty({
    description: 'Ingresar el refreshToken',
    default: 'TOKEN',
  })
  @IsOptional()
  @IsString()
  refresh_token: string;
}
