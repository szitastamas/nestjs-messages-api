import { v4 } from 'uuid';

export class Message {
  id: string;
  content: string;

  constructor(content?: string, id?: string) {
    this.content = content ?? '';
    this.id = id ?? v4();
  }

  serialize() {
    return {
      id: this.id,
      content: this.content,
    };
  }
}
