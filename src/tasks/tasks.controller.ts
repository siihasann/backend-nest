import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  listTasks() {
    return 'This action returns all tasks';
  }

  @Post()
  createTask(@Body() body: any) {
    return body;
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return `this actions returns a #${id} task`;
  }
}
