import { Component } from '@angular/core';

@Component({
  selector: 'app-alfred',
  templateUrl: './alfred.component.html',
  styleUrls: ['./alfred.component.scss']
})
export class AlfredComponent {

  mic = {
    state: 'waiting',
    color: 'basic'
  }

  textMessage = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis a tempore, nam, sed iusto dolorem earum magnam, similique optio corrupti expedita nesciunt molestiae ipsa dolorum velit perferendis fuga cupiditate nisi.'

  record() {
    if (this.mic.state === 'waiting') {
      this.mic.state = 'listening'
      this.mic.color = 'warn'
      this.textMessage = 'Escuchando...'
    } else {
      this.mic.state = 'waiting'
      this.mic.color = 'basic'
      this.textMessage = 'Pulsa para comenzar'
    }
  }

}
