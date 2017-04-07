import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Message } from '../../messages/message';
import { MessagesService } from '../../messages/messages.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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
