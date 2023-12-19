import {
  Body,
  Controller,
  Post,
  Put,
  Get,
  Delete,
  Param,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    return await this.todoService.create(createTodoDto);
  }

  @Put()
  async update(@Body() updateTodoDto: UpdateTodoDto) {
    return await this.todoService.update(updateTodoDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.todoService.findOne(id);
  }

  @Get()
  async findAll() {
    return await this.todoService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    console.log('id from controller', id);
    return await this.todoService.remove(id);
  }
}
