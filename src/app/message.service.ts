import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  public messages: string[] = [];

   add(message: string) {
     this.messages.push(message);
   }

   clear() {
     this.messages = [];
   }


}
