import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage implements OnInit {
  public cardapio: string;
  type: string;
  numbers: any[];

  constructor(private activatedRoute: ActivatedRoute) { 
  
    this.numbers = Array(5).fill(4); // Isso é só pra aparecer o design, trocar quando implementar a listagem de verdade :)
  }

  ngOnInit() {
    this.type = 'cardapio';
    this.cardapio = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
