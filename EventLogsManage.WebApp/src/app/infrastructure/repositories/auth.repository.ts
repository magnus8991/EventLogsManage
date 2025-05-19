import { Injectable } from "@angular/core";
import {AuthService} from "@core/services/auth-service.interface";
import {AuthResponse} from "@core/models/login/auth-response.model";

@Injectable({
  providedIn: "root",
})
export class AuthRepository extends AuthService {
  constructor() {
    const storedState = localStorage.getItem('userLogged');
    const initialLoggedState = storedState !== null ? JSON.parse(storedState) : false;
    super(initialLoggedState);
  }

  getCurrentUser(): AuthResponse {
    let stringAuth: string | null = localStorage.getItem("auth");
    if (stringAuth === null) {
      throw Error('No hay usuario logueado');
    }
    let authResponse: AuthResponse = JSON.parse(stringAuth) as AuthResponse;
    return authResponse;
  }

  login(): void {
    this.userLoggedSubject.next(true);
    localStorage.setItem('userLogged', JSON.stringify(true));
  }

  logout(): void {
    this.userLoggedSubject.next(false);
    localStorage.setItem('userLogged', JSON.stringify(false));
  }
}
