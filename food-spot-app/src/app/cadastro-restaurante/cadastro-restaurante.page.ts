import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AlertController, IonChip } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastro-restaurante',
  templateUrl: './cadastro-restaurante.page.html',
  styleUrls: ['./cadastro-restaurante.page.scss'],
})
export class CadastroRestaurantePage implements OnInit {
  public api: Observable<any>;
  public cadastro: string;
  public nome: string = null;
  public email: string;
  public password: string = null;
  public secpassword: string = null;
  public descricao: string = null;
  public local: string = null;
  public categoria: string = null;
  public retorno;
  router: Router;
  constructor(private activatedRoute: ActivatedRoute, public httpClient: HttpClient,
    public appComponent: AppComponent, public alertCtrl: AlertController, router: Router) { 
      this.router = router      
    }
    Selected(catSelected:string,chip: IonChip, chip2: IonChip,chip3: IonChip,chip4: IonChip,chip5: IonChip,chip6: IonChip,chip7: IonChip,chip8: IonChip,chip9: IonChip,chip10: IonChip){
      this.categoria = catSelected;            
      chip.color = "secundary";
      chip2.color = "primary";
      chip3.color = "primary";
      chip4.color = "primary";
      chip5.color = "primary";
      chip6.color = "primary";
      chip7.color = "primary";
      chip8.color = "primary";
      chip9.color = "primary";
      chip10.color = "primary";
    }
    Cadastrar()
    {
      if(this.nome === null || this.categoria === null || this.descricao === null || this.local === null){
        this.showAlert("Falha no Cadastro", "Esta faltando infomações!");
      }else{
        if(this.password === this.secpassword){
          let postData = {
            "nome": this.nome,
            "descricao": this.descricao,
            "categoria": this.categoria,
            "local": this.local
          }  
          this.httpClient.post(environment.api_url + "/restaurante", postData)
            .subscribe(data => {
              this.CadastrarRestLogin();                 
            }, error => {
              this.showAlert("Falha no Cadastro", "erro no cadastro");
            });
        }else{
          this.showAlert("Falha no Cadastro", "Senhas diferentes!");
        }

      }

    }
  CadastrarRestLogin() {
    let postData = {
      "login": this.nome,
      "senha": this.password
    }  
    this.httpClient.post(environment.api_url + "/login/restaurante", postData)
      .subscribe(data => {
        this.Auth();
      }, error => {
        this.showAlert("Falha ", "Falha ao Cadastrar Restaurante");
      });
  }

    Auth() {
      let postData = {
        "login": this.nome,
        "senha": this.password
      }  
      this.httpClient.post(environment.api_url + "/login/authRestaurante", postData)
        .subscribe(data => {
          this.retorno = data;
          this.showAlert("Sucesso", "Restaurante Cadastrado");     
        }, error => {
          this.showAlert("Falha ", "Falha ao Cadastrar Restaurante");
        });

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