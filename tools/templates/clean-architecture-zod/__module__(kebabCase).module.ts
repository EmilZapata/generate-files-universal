import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { __entity__(pascalCase)Model } from "./infraestructure/database/models/__entity__(kebabCase).model";

import { __entity__(pascalCase)Controller } from "./infraestructure/controllers/__entity__(kebabCase).controller";

import { __entity__(pascalCase)Service } from "./application/services/__entity__(kebabCase).service";
import { __entity__(pascalCase)Provider } from "./infraestructure/providers/__entity__(kebabCase).provider";
import { __entity__(pascalCase)sRouter } from "@__module__(camelCase)/infraestructure/routes/__entity__(kebabCase)s.router";

@Module({
  // controllers: [__entity__(pascalCase)Controller],
  imports: [TypeOrmModule.forFeature([__entity__(pascalCase)Model])],
  providers: [...__entity__(pascalCase)Provider, __entity__(pascalCase)Service, __entity__(pascalCase)sRouter],
  exports: [...__entity__(pascalCase)Provider],
})
export class __module__(pascalCase)Module {}
