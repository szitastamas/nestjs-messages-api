import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
import { Message } from './models/Message';

@Injectable()
export class MessagesService {
  constructor(private msgRepo: MessagesRepository) {}

  public async getAll(): Promise<Message[]> {
    return await this.msgRepo.getAll();
  }

  public async getOne(id: string): Promise<Message> {
    return await this.msgRepo.getOne(id);
  }

  public async createNew(content: string): Promise<Message> {
    return await this.msgRepo.createNew(new Message(content));
  }

  public async deleteMessage(id: string) {
    await this.msgRepo.deleteMessage(id);
  }
}
