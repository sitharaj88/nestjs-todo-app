import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateTodoDto {
  @IsNumber()
  id: number;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  completed: boolean;
}
