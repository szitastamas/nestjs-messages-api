import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/messages.service';
import { MessagesRepository } from './messages/messages.repository';

@Module({
  imports: [MessagesModule],
  controllers: [AppController, MessagesController],
  providers: [AppService],
})
export class AppModule {}
