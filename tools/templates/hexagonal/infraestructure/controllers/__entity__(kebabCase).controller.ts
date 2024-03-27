import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
  ParseIntPipe
} from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from "@nestjs/swagger";
import { JwtAuthGuard } from "@shared/guards/jwt-auth.guard";
import { UserLogged } from '@shared/decorators/user-logged.decorator';


import { ChangeStatusReqDto } from "@shared/utils/dtos/api/request/activate.req.dto";
import { CreateResponseDto } from "@shared/utils/dtos/api/response/create.res.dto";
import { ErrorResponseDto } from "@shared/utils/dtos/api/response/error.res.dto";
import { SuccessResponseDto } from "@shared/utils/dtos/api/response/succes.res.dto";
import { TableResponseDto } from "@shared/utils/dtos/api/response/table-response.res.dto";
import { Create__entity__(pascalCase)ReqDto } from "../dto/request/__entity__(kebabCase)/create-__entity__(kebabCase).request.dto";
import { Table__entity__(pascalCase)ReqDto } from "../dto/request/__entity__(kebabCase)/table-__entity__(kebabCase).request.dto";
import { Update__entity__(pascalCase)ReqDto } from "../dto/request/__entity__(kebabCase)/update-__entity__(kebabCase).request.dto";

import { __entity__(pascalCase)Service } from "@__module__(camelCase)/application/services/__entity__(kebabCase).service";
import { IUserLogged } from '@shared/utils/interfaces/user-logged.interface';
import { Auth } from '@shared/decorators/auth.decorator';
import { SelectQueryDto } from '@shared/utils/dtos/query-select/select-query.dto';

@ApiTags("__entity__(titleCase)")
@Controller("__entity__(kebabCase)")
export class __entity__(pascalCase)Controller {
  constructor(private readonly service: __entity__(pascalCase)Service) {}

  @Auth({
    description: 'Listar select de __entity__(sentenceCase)',
  })
  @Get('select')
  async getSelect(@Query() search?: SelectQueryDto) {
    return this.service.getSelect(search);
  }

  @Auth({
    description: 'Listar __entity__(sentenceCase)(s)',
  })
  @Post("table")
  table(@Body() body: Table__entity__(pascalCase)ReqDto) {
    return this.service.getTable(body);
  }

  @Auth({
    description: 'Buscar un __entity__(sentenceCase)',
  })
  @Get(":id")
  async find(@Param("id", ParseIntPipe) id: number) {
    return this.service.findOne__entity__(pascalCase)(id);
  }

  @Auth({
    description: 'Crear un __entity__(sentenceCase)',
  })
  @Post()
  create(@Body() body: Create__entity__(pascalCase)ReqDto, @UserLogged() userLogged: IUserLogged) {
    return this.service.create__entity__(pascalCase)(body, userLogged);
  }

  @Auth({
    description: 'Actualizar un __entity__(sentenceCase)',
  })
  @Patch(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() body: Update__entity__(pascalCase)ReqDto, @UserLogged() userLogged: IUserLogged) {
    return this.service.update__entity__(pascalCase)(id, body, userLogged);
  }

  @Auth({
    description: 'Cambiar estado de registros',
  })
  @Put("/change-status")
  changeStatus(@Body() body: ChangeStatusReqDto, @UserLogged() userLogged: IUserLogged) {
    return this.service.changeStatus(body, userLogged);
  }

  @Auth({
    description: 'Eliminar un __entity__(sentenceCase)',
  })
  @Delete(":id")
  delete(@Param("id", ParseIntPipe) id: number, @UserLogged() userLogged: IUserLogged) {
    return this.service.delete__entity__(pascalCase)(id, userLogged);
  }
}
