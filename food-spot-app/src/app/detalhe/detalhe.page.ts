import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {

  public detalhe: string;
  public totalItens = 0;

  constructor(private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit() {
    this.detalhe = this.activatedRoute.snapshot.paramMap.get('id');
  }
  

  
  public increment () {
    this.totalItens++;
  }
  
  public decrement () {
    if(this.totalItens == 0){
      return
    }
    this.totalItens--;
  }
  

}
