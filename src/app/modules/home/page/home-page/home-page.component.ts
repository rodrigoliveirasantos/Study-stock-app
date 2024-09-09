import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [MessageService]
})
export class HomePageComponent {
  private _messageService = inject(MessageService);
  private _fb = inject(FormBuilder);

  form: 'sign-in' | 'sign-up' = 'sign-in';

  signInForm = this._fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', Validators.required]
  });

  signUpForm = this._fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', Validators.required],
    name: ['', Validators.required]
  })

  show() {
    this._messageService.add({
      severity: 'success',
      summary: 'Beeg!',
      detail: 'Tu foi brabo cria'
    })
  }

  showSignIn(): void {
    this.form = 'sign-in'
  }

  showSignUp(): void{
    this.form = 'sign-up';
  }

  handleSignIn(): void {
    console.log(this.signInForm.value)
  }

  handleSignUp(): void {
    console.log(this.signUpForm.value)
  }
}
