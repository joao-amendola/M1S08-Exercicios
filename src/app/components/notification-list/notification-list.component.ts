import { Component } from '@angular/core';
@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})

export class NotificationListComponent {
  pessoas = [
    {
      titulo: "Gmail",
      subtitulo: "Novo e-mail.",
      data: "20:01 de 22 de Nov. de 2022"
    },
    {
      titulo: "WhatsApp",
      subtitulo: "Nova mensagem de João",
      data: "20:43 de 22 de Nov. de 2022"
    },
    {
      titulo: "iFood",
      subtitulo: "Pedido confirmado!",
      data: "21:33 de 22 de Nov. de 2022"
    }
  ]
}
