import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})

export class RestaurantesPage implements OnInit {
  public restaurante: string;
  public api: Observable<any>;
  public retorno;
  numbers: any[];

  constructor(private activatedRoute: ActivatedRoute,public httpClient: HttpClient) {
      this.numbers = Array(5).fill(4); // Isso é só pra aparecer o design, trocar quando implementar a listagem de verdade :)
      this.httpClient.get("http://localhost:1337/restaurante")
      .subscribe(data => {
        this.retorno = data;
        console.log(data)
      }, error => {
        console.log(error);
      });
   }

  ngOnInit() {
    this.restaurante = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
