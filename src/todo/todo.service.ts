import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  create(todo: Todo): Promise<Todo> {
    return this.todoRepository.save(todo);
  }

  async update(todo: Todo): Promise<Todo> {
    await this.todoRepository.update(todo.id, todo);
    return this.findOne(todo.id);
  }

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async findOne(id: number): Promise<Todo> {
    const findOptions: FindOneOptions<Todo> = {
      where: { id: id },
    };
    const todo = await this.todoRepository.findOne(findOptions);
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found.`);
    }
    return todo;
  }

  async remove(id: number): Promise<Todo> {
    const todo = await this.findOne(id);
    if (!todo) throw new NotFoundException(`Todo with id ${id} not found.`);
    console.log('Deleting todo with id:', id);
    await this.todoRepository.delete(id);
    return todo;
  }
}
