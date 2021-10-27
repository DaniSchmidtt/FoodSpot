import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {
  public restaurante: string;
  numbers: any[];

  constructor(private activatedRoute: ActivatedRoute) {
      this.numbers = Array(5).fill(4); // Isso é só pra aparecer o design, trocar quando implementar a listagem de verdade :)
    
   }

  ngOnInit() {
    this.restaurante = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
