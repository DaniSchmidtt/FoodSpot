
import { AppComponent } from '../app.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public login: string;
  public api: Observable<any>;
  public email: string;
  public password: string;
  public retorno;
  router: Router;
  constructor(private activatedRoute: ActivatedRoute, public httpClient: HttpClient,
    public appComponent: AppComponent, public alertCtrl: AlertController, router: Router) {
    this.router = router
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
        this.appComponent.typeOfUser = 0;
        this.showAlert("Sucesso", "Login realizado");  
        this.router.navigateByUrl('restaurantes/Restaurantes',{replaceUrl:true})      
      }, error => {
        this.httpClient.post("http://localhost:1337/login/authadm", postData)
        .subscribe(data => {
          this.retorno = data;
          this.appComponent.isloged = this.retorno.auth;
          this.appComponent.user = this.email;
          this.appComponent.typeOfUser = 1;
          this.showAlert("Sucesso", "Login realizado");  
          this.router.navigateByUrl('restaurantes/Restaurantes',{replaceUrl:true})      
        }, error => {
          this.httpClient.post("http://localhost:1337/login/authRestaurante", postData)
          .subscribe(data => {
            this.retorno = data;
            this.appComponent.isloged = this.retorno.auth;
            this.appComponent.user = this.email;
            this.appComponent.typeOfUser = 2;
            this.showAlert("Sucesso", "Login realizado");  
            this.router.navigateByUrl('restaurantes/Restaurantes',{replaceUrl:true})      
          }, error => {            
            this.showAlert("Login failed", "Login ou senha não estão cadastrados");
          });
          //this.showAlert("Login failed", "Login ou senha não estão cadastrados");
        });
        //this.showAlert("Login failed", "Login ou senha não estão cadastrados");
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
    console.log(result);
  }
  ngOnInit() {
    this.login = this.activatedRoute.snapshot.paramMap.get('id');
  }
}



