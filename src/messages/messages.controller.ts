import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDTO } from './models/DTOs/CreateMessageDTO.dto';
import { Message } from './models/Message';

@Controller('messages')
export class MessagesController {
  constructor(private msgService: MessagesService) {}

  @Get()
  public async getAll(): Promise<Message[]> {
    return await this.msgService.getAll();
  }

  @Get('/:id')
  public async getOne(@Param('id') id: string): Promise<Message> {
    return await this.msgService.getOne(id);
  }

  @Post()
  public async createNew(@Body() body: CreateMessageDTO): Promise<Message> {
    return await this.msgService.createNew(body.content);
  }

  @Delete('/:id')
  public async deleteMessage(@Param("id") id: string) {
    await this.msgService.deleteMessage(id);
  }
}
