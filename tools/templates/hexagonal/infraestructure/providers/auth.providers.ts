import { USER_CODE_REPOSITORY } from '@shared/utils/constants/repositories.cst';

import { UserCodePostgresRepository } from '../database/repositories/user-code.postgres.repository';

import { SendCodeUseCase } from '@auth/application/use-cases/send-code.usecase';
import { SendRecoverUseCase } from '@auth/application/use-cases/send-recover-password.usecase';
import { VerifyCodeUseCase } from '@auth/application/use-cases/verify-code.usecase';
import { LoginUseCase } from 'src/auth/application/use-cases/login.usecase';
import { ChangePasswordUseCase } from '@auth/application/use-cases/change-password.usecase';
import { ChangePasswordUserUseCase } from '@auth/application/use-cases/change-password-user.usecase';

export const AuthProviders = [
  {
    provide: USER_CODE_REPOSITORY,
    useClass: UserCodePostgresRepository,
  },
  LoginUseCase,
  SendCodeUseCase,
  SendRecoverUseCase,
  VerifyCodeUseCase,
  ChangePasswordUseCase,
  ChangePasswordUserUseCase,
];
