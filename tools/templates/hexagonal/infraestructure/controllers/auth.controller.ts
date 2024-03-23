import { Body, Controller, Headers, Post, UseGuards } from '@nestjs/common';
import {
  ApiOperation,
  ApiTags,
  ApiBearerAuth,
  ApiBadRequestResponse,
  ApiOkResponse,
} from '@nestjs/swagger';

import type { IUserLogged } from '@shared/utils/interfaces/user-logged.interface';

import { LoginReqDto } from '../dto/request/login.request.dto';
import { ErrorResponseDto } from 'src/shared/utils/dtos/api/response/error.res.dto';
import { SuccessResponseDto } from 'src/shared/utils/dtos/api/response/succes.res.dto';
import { VerifyCodeReqDto } from '../dto/request/verify-code.request.dto';
import { SendRecoverPasswordReqDto } from '../dto/request/send-recover-password.request.dto';
import { SendCodeReqDto } from '../dto/request/send-code.request.dto';
import { ChangePasswordReqDto } from '../dto/request/change-password.request.dto';
import { ChangePasswordUserReqDto } from '../dto/request/change-password-user.request.dto';

import { AuthService } from '../../application/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { UserLogged } from '@shared/decorators/user-logged.decorator';
import { JwtAuthGuard } from '@shared/guards/jwt-auth.guard';

@ApiTags('Auth')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    description: 'Realiza el Login',
  })
  @ApiOkResponse({ type: SuccessResponseDto })
  @ApiBadRequestResponse({ type: ErrorResponseDto })
  @Post('sign-in')
  login(@Body() body: LoginReqDto) {
    return this.authService.login(body);
  }

  @ApiOperation({
    description: 'Verifica codigo',
  })
  @ApiOkResponse({ type: SuccessResponseDto })
  @ApiBadRequestResponse({ type: ErrorResponseDto })
  @Post('verify-code')
  verifyCode(@Body() body: VerifyCodeReqDto) {
    return this.authService.verifyCode(body);
  }

  @ApiOperation({
    description: 'Re-Envia codigo de verificacion',
  })
  @ApiOkResponse({ type: SuccessResponseDto })
  @ApiBadRequestResponse({ type: ErrorResponseDto })
  @Post('re-send-code')
  sendCode(@Body() body: SendCodeReqDto) {
    return this.authService.sendCode(body.email);
  }

  @ApiOperation({
    description: 'Envia correo de cambio de contraseña',
  })
  @ApiOkResponse({ type: SuccessResponseDto })
  @ApiBadRequestResponse({ type: ErrorResponseDto })
  @Post('send-recover-password')
  sendRecoverPassword(@Body() body: SendRecoverPasswordReqDto) {
    return this.authService.sendRecoverPassword(body);
  }

  @ApiOperation({
    description: 'Cambia password por token',
  })
  @ApiOkResponse({ type: SuccessResponseDto })
  @ApiBadRequestResponse({ type: ErrorResponseDto })
  @UseGuards(AuthGuard('jwt'))
  @Post('change-password')
  changePassword(
    @Body() body: ChangePasswordReqDto,
    @Headers('Authorization') token: string,
  ) {
    return this.authService.changePassword(body.password, token);
  }

  @ApiOperation({
    description: 'Cambia password por token',
  })
  @ApiOkResponse({ type: SuccessResponseDto })
  @ApiBadRequestResponse({ type: ErrorResponseDto })
  @UseGuards(JwtAuthGuard)
  @Post('change-password-account')
  changePasswordAccount(
    @Body() body: ChangePasswordUserReqDto,
    @UserLogged() user: IUserLogged,
  ) {
    return this.authService.changePasswordUser(body, user);
  }
}
