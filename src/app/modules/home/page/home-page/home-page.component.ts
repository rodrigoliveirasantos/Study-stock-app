import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [MessageService]
})
export class HomePageComponent {
  private _messageService = inject(MessageService);

  form: 'sign-in' | 'sign-up' = 'sign-in'


  show() {
    this._messageService.add({
      severity: 'success',
      summary: 'Beeg!',
      detail: 'Tu foi brabo cria'
    })
  }

  showSignIn() {
    this.form = 'sign-in'
  }

  showSignUp() {
    this.form = 'sign-up';
  }
}
