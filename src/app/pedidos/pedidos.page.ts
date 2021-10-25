import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  public pedidos: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.pedidos = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
