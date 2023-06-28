import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdatePathUserDTO } from './dto/update-patch-user.dto';
import { UpdateUserDTO } from './dto/update-put-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async listUsers() {
    /* Não é necessário chamar await quando usamos prisma no return */
    return this.prisma.user.findMany(); // select * from
  }

  async showUser(id: number) {
    await this.exists(id);

    return this.prisma.user.findUnique({ where: { id } });
  }

  async insertUser(data: CreateUserDTO) {
    return this.prisma.user.create(data); // Insert into () values ()
  }

  async updateUser(data: UpdateUserDTO, id: number) {
    await this.exists(id);

    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    }); // update users set x=1, y=2, z=3 where id=1
  }

  async updateSingleUserProperty(
    { email, name, password }: UpdatePathUserDTO,
    id: number,
  ) {
    await this.exists(id);

    const data: any = {};

    if (email) data.email = email;
    if (name) data.name = name;
    if (password) data.password = password;

    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    }); // update users set c=2 where id=1
  }

  async deleteUser(id: number) {
    await this.exists(id);

    return this.prisma.user.delete({
      where: {
        id,
      },
    }); // update users set c=2 where id=1
  }

  /* Métodos úteis */
  /**
   *
   */
  async exists(id: number) {
    if (
      !(await this.prisma.user.count({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException(`O usuário com o id ${id} não existe`);
    }
  }
}
