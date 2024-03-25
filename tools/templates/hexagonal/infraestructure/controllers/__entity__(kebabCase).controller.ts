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


import { ChangeStatusReqDto } from "@shared/utils/dtos/api/request/activate.req.dto";
import { CreateResponseDto } from "@shared/utils/dtos/api/response/create.res.dto";
import { ErrorResponseDto } from "@shared/utils/dtos/api/response/error.res.dto";
import { SuccessResponseDto } from "@shared/utils/dtos/api/response/succes.res.dto";
import { TableResponseDto } from "@shared/utils/dtos/api/response/table-response.res.dto";
import { Create__entity__(pascalCase)ReqDTO } from "../dto/request/create-__entity__(kebabCase).request.dto";
import { Table__entity__(pascalCase)ReqDTO } from "../dto/request/table-__entity__(kebabCase).request.dto";
import { Update__entity__(pascalCase)ReqDTO } from "../dto/request/update-__entity__(kebabCase).request.dto";

import { __entity__(pascalCase)Service } from "@__module__(camelCase)/application/services/__entity__(kebabCase).service";

@ApiTags("Tipo de estudiante")
@Controller("student-type")
export class __entity__(pascalCase)Controller {
  constructor(private readonly service: __entity__(pascalCase)Service) {}

  @Auth({
    description: 'Listar select de __entity__(sentenceCase)',
  })
  @Get('select')
  @ApiQuery({ name: "search", required: false, type: String })
  async getSelect(@Query("search") search?: string) {
    return this.service.getSelect(search);
  }

  @Auth({
    description: 'Listar __entity__(sentenceCase)(s)',
  })
  @Post("table")
  table(@Body() body: Table__entity__(pascalCase)ReqDTO) {
    return this.service.getTable(body);
  }

  @Auth({
    description: 'Buscar un __entity__(sentenceCase)',
  })
  @Get(":id")
  async find(@Param("id") id: number) {
    return this.service.findOne(id);
  }

  @Auth({
    description: 'Crear un __entity__(sentenceCase)',
  })
  @Post()
  create(@Body() body: Create__entity__(pascalCase)ReqDTO) {
    return this.service.create(body);
  }

  @Auth({
    description: 'Actualizar un __entity__(sentenceCase)',
  })
  @Patch(":id")
  update(@Param("id") id: number, @Body() body: Update__entity__(pascalCase)ReqDTO) {
    return this.service.update(id, body);
  }

  @Auth({
    description: 'Cambiar estado de registros',
  })
  @Put("/change-status")
  changeStatus(@Body() body: ChangeStatusReqDto) {
    return this.service.changeStatus(body);
  }

  @Auth({
    description: 'Eliminar un __entity__(sentenceCase)',
  })
  @Delete(":id")
  delete(@Param("id") id: number) {
    return this.service.delete(id);
  }
}