import { AppComponent } from '../app.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public api: Observable<any>;
  public cadastro: string;
  public nome: string;
  public email: string;
  public password: string;
  public secpassword: string;
  public retorno;
  router: Router;
  constructor(private activatedRoute: ActivatedRoute, public httpClient: HttpClient,
    public appComponent: AppComponent, public alertCtrl: AlertController, router: Router) { 
      this.router = router
    }

    Cadastrar()
    {
      if(false){
        this.showAlert("Falha no Cadastro", "Esta faltando infomações!");
      }else{
        if(this.password === this.secpassword){
          let postData = {
            "login": this.email,
            "senha": this.password
          }  
          this.httpClient.post("http://localhost:1337/login", postData)
            .subscribe(data => {
              this.Auth()      
            }, error => {
              this.showAlert("Falha no Cadastro", "Cadastro ja existe!");
            });
        }else{
          this.showAlert("Falha no Cadastro", "Senhas diferentes!");
        }

      }

    }

    Auth() {
      let postData = {
        "login": this.email,
        "senha": this.password
      }  
      this.httpClient.post("http://localhost:1337/login/auth", postData)
        .subscribe(data => {
          this.retorno = data;
          this.appComponent.isloged = this.retorno.auth;
          this.appComponent.user = this.email;
          this.showAlert("Sucesso", "Login realizado");        
        }, error => {
          this.showAlert("Login failed", "Login ou senha não estão cadastrados");
        });
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
    this.cadastro = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
