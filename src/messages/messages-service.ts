import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class MessagesService {
  constructor (http: Http) {
  }

  getMessages () {
    return []
  }

  getMessage (id) {
    return this.getMessages().filter((message) => message.id == id)[0]
  }
}
