import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { SignUpUserRequest } from 'src/app/models/interfaces/sign-up/sign-up-user-request';
import { SignUpUserResponse } from 'src/app/models/interfaces/sign-up/sign-up-user-response';
import { SignInUserRequest } from 'src/app/models/interfaces/sign-in/sign-in-user-request';
import { SignInUserResponse } from 'src/app/models/interfaces/sign-in/sign-in-user-response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _API_URL = environment.apiUrl;

  private _http = inject(HttpClient);

  signUp(request: SignUpUserRequest): Observable<SignUpUserResponse> {
    return this._http.post<SignUpUserResponse>(
      `${this._API_URL}/user`,
      request
    );
  }

  signIn(request: SignInUserRequest): Observable<SignInUserResponse> {
    return this._http.post<SignInUserResponse>(
      `${this._API_URL}/auth`,
      request
    );
  }
}
