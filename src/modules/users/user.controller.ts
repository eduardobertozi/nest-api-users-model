import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-put-user.dto';
import { ParamId } from 'src/decorators/param-id.decorator';
import { LogInterceptor } from 'src/interceptors/log.interceptor';
import { UserService } from './user.service';

@UseInterceptors(LogInterceptor) // Executa função que intercepta recursos
@Controller('users') // Caminho da rota
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async list() {
    return this.userService.listUsers();
  }

  @Post()
  async create(@Body() body: CreateUserDTO) {
    return this.userService.insertUser(body);
  }

  /* Parametros na url */
  @Put(':id')
  async update(@Body() body: UpdateUserDTO, @ParamId('id') id: number) {
    return this.userService.updateUser(body, id);
  }

  @Patch(':id')
  async updateSingle(@Body() body, @ParamId('id') id: number) {
    if (!body.email && !body.name && !body.password) {
      throw new BadRequestException(
        'É obrigatório enviar pelo menos um campo e valor alterado',
      );
    }

    this.userService.updateSingleUserProperty(body, id);
  }

  @Delete(':id')
  async delete(@ParamId('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
