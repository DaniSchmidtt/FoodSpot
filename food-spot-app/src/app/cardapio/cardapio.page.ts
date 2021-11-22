import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';

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
  carrinho:any[] = Array();
  total:number;
  router: Router;

  constructor(private activatedRoute: ActivatedRoute,public httpClient: HttpClient,router: Router,public alertCtrl: AlertController) { 
    this.router = router
    this.httpClient.get(environment.api_url + "/cardapio")
    .subscribe(data => {
      this.retorno = data;      
      console.log(data)
    }, error => {
      console.log(error);
    });   
    this.numbers = Array(5).fill(4);
  }
  Carrinho(prato:string, preco:string){
    if(this.carrinho != null){
    this.carrinho[this.carrinho.length] = {prato,preco}
   }
    else{
      this.carrinho[0] = {prato,preco}
    }    
    this.total = 0;
    this.carrinho.forEach(element => {
      this.total = Number(element.preco) + this.total
    });
  }      

  Checkout(){
    this.showAlert("Pedido Realizado", "Pedido realizado com sucesso");
    this.router.navigateByUrl('restaurantes/Restaurantes') 

  }
      async showAlert(cabecalho, menssagem) {
      const alert = await this.alertCtrl.create({
        header: cabecalho,
        subHeader: '',
        message: menssagem,
        buttons: ['OK']
      });
      await alert.present();
      const result = await alert.onDidDismiss();
    }
  ngOnInit() {
    this.type = 'cardapio';
    this.cardapio = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
