import { Component, inject, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _primengConfig = inject(PrimeNGConfig);

  ngOnInit() {
    this._primengConfig.ripple = true;
  }
}
