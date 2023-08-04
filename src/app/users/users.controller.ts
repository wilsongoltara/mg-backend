import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() data: User): Promise<User> {
    return this.usersService.createUser(data);
  }

  @Get()
  async findAllUsers(): Promise<User[]> {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  async findUserById(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findUserById(+id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: Partial<User>,
  ): Promise<User> {
    return this.usersService.updateUser(+id, data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.usersService.deleteUser(+id);
  }
}
