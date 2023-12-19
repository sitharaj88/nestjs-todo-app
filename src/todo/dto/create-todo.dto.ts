import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly title: string;

  @IsBoolean()
  @IsOptional()
  readonly completed: boolean;
}
