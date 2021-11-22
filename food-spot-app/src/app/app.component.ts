import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public api: Observable<any>;
  public appPages = [
    { title: 'Restaurantes', url: '/restaurantes/Restaurantes', icon: 'restaurant' },
    { title: 'Procurar', url: '/procurar/Procurar', icon: 'search' },
    { title: 'Pedidos', url: '/pedidos/Pedidos', icon: 'archive' }
  ];
  public appPagesOff = [
    { title: 'Restaurantes', url: '/restaurantes/Restaurantes', icon: 'restaurant' }
  ];
  public appAdm= [
    { title: 'cadastro-restaurante', url: '/cadastro-restaurante/cadastro-restaurante', icon: 'restaurant' }
  ];
  public appRestaurante= [
    { title: 'cadastro de prato', url: '/cadastro-prato/cadastro-prato', icon: 'archive' },
  ];
  public appBottonPages= [
    { title: 'Login', url: '/login/Login', icon: 'enter' },
    { title: 'Cadastro', url: '/cadastro/Cadastro', icon: 'send' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public isloged;
  public user;
  public typeOfUser;
  logout(){
    this.isloged = null
    this.user = null
    this.typeOfUser = null
  }
  constructor(public httpClient: HttpClient) {
    this.isloged = null;
  }
  public submitForm(form){
    console.log("form submitted");
  }
}
