import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SignInUserRequest } from 'src/app/models/interfaces/sign-in/sign-in-user-request';
import { SignUpUserRequest } from 'src/app/models/interfaces/sign-up/sign-up-user-request';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [MessageService],
})
export class HomePageComponent {
  private _messageService = inject(MessageService);
  private _userService = inject(UserService);
  private _fb = inject(FormBuilder);

  form: 'sign-in' | 'sign-up' = 'sign-in';

  signInForm = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  signUpForm = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    name: ['', Validators.required],
  });

  show() {
    this._messageService.add({
      severity: 'success',
      summary: 'Beeg!',
      detail: 'Tu foi brabo cria',
    });
  }

  showSignIn(): void {
    this.form = 'sign-in';
  }

  showSignUp(): void {
    this.form = 'sign-up';
  }

  handleSignIn(): void {
    if (!this.signInForm.valid) {
      return;
    }

    this._userService
      .signIn(this.signInForm.value as SignInUserRequest)
      .subscribe();
  }

  handleSignUp(): void {
    if (this.signUpForm.invalid) {
      return;
    }

    this._userService
      .signUp(this.signUpForm.value as SignUpUserRequest)
      .subscribe({
        next: () => {
          this.signUpForm.reset();
          this.showSignIn();
        },
        error: console.error,
      });
  }
}
