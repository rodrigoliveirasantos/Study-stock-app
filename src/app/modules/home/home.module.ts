import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './page/home-page/home-page.component';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,

    /* PrimeNG */
    CardModule,
    InputTextModule,
    ToastModule,
    ButtonModule,
    RippleModule
  ]
})
export class HomeModule { }
