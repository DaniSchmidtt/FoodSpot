import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Restaurantes', url: '/restaurantes/Restaurantes', icon: 'restaurant' },
    { title: 'Procurar', url: '/procurar/Procurar', icon: 'search' },
    { title: 'Pedidos', url: '/pedidos/Pedidos', icon: 'archive' }
  ];
  public appBottonPages= [
    { title: 'Login', url: '/login/Login', icon: 'enter' },
    { title: 'Cadastro', url: '/cadastro/Cadastro', icon: 'send' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
