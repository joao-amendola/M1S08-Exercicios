import { Component } from '@angular/core';
import { NOTIFICACOES } from 'src/assets/notifications';

interface Notificacao {
  titulo: string
  subtitulo: string
  data: string
  lido: boolean
}
@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})


export class NotificationListComponent {
  notifications: Notificacao[] = NOTIFICACOES

  lido(notificacaoLida: boolean){
    // let lido = notificacaoLida = true ? false : true
    // console.log(lido)
    // return lido
    // console.log(notificacaoLida)
    // return notificacaoLida
    return true
  }
}

