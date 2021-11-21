import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPratoPageRoutingModule } from './cadastro-prato-routing.module';

import { CadastroPratoPage } from './cadastro-prato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPratoPageRoutingModule
  ],
  declarations: [CadastroPratoPage]
})
export class CadastroPratoPageModule {}
