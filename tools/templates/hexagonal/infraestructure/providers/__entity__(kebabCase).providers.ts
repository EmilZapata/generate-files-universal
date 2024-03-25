import { ChangeStatus__entity__(pascalCase)UseCase } from "@__module__(camelCase)/application/use-cases/__entity__(kebabCase)/change-status-__entity__(kebabCase).usecase";
import { Create__entity__(pascalCase)UseCase } from "@__module__(camelCase)/application/use-cases/__entity__(kebabCase)/create-__entity__(kebabCase).usercase";
import { Delete__entity__(pascalCase)UseCase } from "@__module__(camelCase)/application/use-cases/__entity__(kebabCase)/delete-__entity__(kebabCase).usercase";
import { FindAll__entity__(pascalCase)UseCase } from "@__module__(camelCase)/application/use-cases/__entity__(kebabCase)/table-__entity__(kebabCase).usercase";
import { FindOne__entity__(pascalCase)UseCase } from "@__module__(camelCase)/application/use-cases/__entity__(kebabCase)/find-one-__entity__(kebabCase).usercase";
import { Select__entity__(pascalCase)UseCase } from "@__module__(camelCase)/application/use-cases/__entity__(kebabCase)/select-__entity__(kebabCase).usercase";
import { Update__entity__(pascalCase)UseCase } from "@__module__(camelCase)/application/use-cases/__entity__(kebabCase)/update-__entity__(kebabCase).usercase";

import { __entity__(constantCase)_REPOSITORY } from "@shared/utils/constants/repositories.cst";
import { __entity__(pascalCase)PostgresRepository } from "../database/repositories/__entity__(kebabCase).postgres.repository";

const __entity__(constantCase)_USE_CASES = [
  Create__entity__(pascalCase)UseCase,
  FindAll__entity__(pascalCase)UseCase,
  FindOne__entity__(pascalCase)UseCase,
  Update__entity__(pascalCase)UseCase,
  Delete__entity__(pascalCase)UseCase,
  Select__entity__(pascalCase)UseCase,
  ChangeStatus__entity__(pascalCase)UseCase,
];

export const __entity__(pascalCase)Provider = [
  {
    provide: __entity__(constantCase)_REPOSITORY,
    useClass: __entity__(pascalCase)PostgresRepository,
  },

  ...__entity__(constantCase)_USE_CASES,
];
