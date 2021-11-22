import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})

export class RestaurantesPage implements OnInit {
  public restaurante: string;
  public api: Observable<any>;
  public retorno;
  router: Router;

  constructor(private activatedRoute: ActivatedRoute,public httpClient: HttpClient, router: Router) {
    this.router = router;
      this.httpClient.get(environment.api_url + "/restaurante")
      .subscribe(data => {
        this.retorno = data;
        console.log(data)
      }, error => {
        console.log(error);
      });      
   }
   Redirecionamento(restaurante:string){
    this.router.navigateByUrl('cardapio/' + restaurante,{replaceUrl:true})
   }

  ngOnInit() {
    this.restaurante = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
