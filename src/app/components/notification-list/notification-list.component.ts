import { Component } from '@angular/core';
import { NOTIFICACOES } from 'src/assets/notifications';
@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})

export class NotificationListComponent {
  notifications = NOTIFICACOES
}

