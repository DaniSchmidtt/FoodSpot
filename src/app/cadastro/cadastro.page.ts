import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public cadastro: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cadastro = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
