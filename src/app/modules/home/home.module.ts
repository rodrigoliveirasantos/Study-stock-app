import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './page/home-page/home-page.component';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    /* PrimeNG */
    CardModule,
    InputTextModule,
    ToastModule,
    ButtonModule,
    RippleModule
  ]
})
export class HomeModule { }
