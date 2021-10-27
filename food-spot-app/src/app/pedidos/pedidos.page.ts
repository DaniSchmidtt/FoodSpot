import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  public pedidos: string;
  numbers: any[];

  constructor(private activatedRoute: ActivatedRoute) { 
    this.numbers = Array(5).fill(4); // Isso é só pra aparecer o design, trocar quando implementar a listagem de verdade :)
  }

  ngOnInit() {
    this.pedidos = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
