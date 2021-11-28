import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';
import { Message } from './models/Message';

@Injectable()
export class MessagesRepository {
  public async getAll(): Promise<Message[]> {
    const db = await this.getDbContent();
    return db['messages'].map((msg) => new Message(msg.content, msg.id));
  }

  public async getOne(id: string): Promise<Message> {
    const db = await this.getDbContent();
    const msg = db['messages'].find((msg) => msg.id === id);
    return new Message(msg.content, msg.id);
  }

  public async createNew(message: Message): Promise<Message> {
    let db = await this.getDbContent();

    db = {
      ...db,
      messages: [...db['messages'], message.serialize()],
    };

    await writeFile('db.json', JSON.stringify(db, undefined, 2));

    return message;
  }

  public async deleteMessage(id: string) {
    let db = await this.getDbContent();

    db = {
      ...db,
      messages: db.messages.filter((msg) => msg.id !== id),
    };

    await writeFile('db.json', JSON.stringify(db, undefined, 2));
  }

  private async getDbContent() {
    return JSON.parse(await readFile('db.json', 'utf8'));
  }
}
