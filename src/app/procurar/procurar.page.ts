import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-procurar',
  templateUrl: './procurar.page.html',
  styleUrls: ['./procurar.page.scss'],
})
export class ProcurarPage implements OnInit {
  public procurar: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.procurar = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
