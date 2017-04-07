import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Message } from './message';
import { MessagesService } from './messages-service';

@Component({
  selector: 'messages',
  templateUrl: 'messages.html'
})
export class Messages {
  messages: Object[]

  constructor(public navController: NavController, messagesService: MessagesService) {
    this.messages = messagesService.getMessages()
  }

  goToMessage(id) {
    this.navController.push(Message, {
      id: id
    })
  }
}
