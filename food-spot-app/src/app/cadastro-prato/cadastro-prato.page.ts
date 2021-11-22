import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AlertController, IonChip } from '@ionic/angular';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-cadastro-prato',
  templateUrl: './cadastro-prato.page.html',
  styleUrls: ['./cadastro-prato.page.scss'],
})
export class CadastroPratoPage implements OnInit {
  public api: Observable<any>;
  public cadastro: string;
  public prato: string = null;
  public preco: string = null;
  public retorno;
  router: Router;
  constructor(private activatedRoute: ActivatedRoute, public httpClient: HttpClient,
    public appComponent: AppComponent, public alertCtrl: AlertController, router: Router) {
      this.router = router
     }
  Cadastrar()
  {
    if(this.prato === null || this.preco === null){
      this.showAlert("Falha no Cadastro", "Esta faltando infomações!");
    }else{
        let postData = {
          "id_restaurante": this.appComponent.user,
          "prato": this.prato,
          "preco": this.preco
        }  
        this.httpClient.post(environment.api_url + "/cardapio", postData)
          .subscribe(data => {
            this.showAlert("Sucesso", "Prato Cadastrado");            
          }, error => {
            this.showAlert("Falha no Cadastro", "erro no cadastro");
          });
    }

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
  }

}
