import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage implements OnInit {
  public cardapio: string;
  public api: Observable<any>;
  public retorno;
  type: string;
  numbers: any[];

  constructor(private activatedRoute: ActivatedRoute,public httpClient: HttpClient) { 
    this.httpClient.get(environment.api_url + "/cardapio")
    .subscribe(data => {
      this.retorno = data;
      console.log(data)
    }, error => {
      console.log(error);
    });   
    this.numbers = Array(5).fill(4); // Isso é só pra aparecer o design, trocar quando implementar a listagem de verdade :)
  }

  ngOnInit() {
    this.type = 'cardapio';
    this.cardapio = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
