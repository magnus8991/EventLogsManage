import {BehaviorSubject, Observable} from "rxjs";
import {AuthResponse} from "@core/models/login/auth-response.model";

export abstract class AuthService {
  protected userLoggedSubject: BehaviorSubject<boolean>;

  userLogged$: Observable<boolean>;

  protected constructor(initialState: boolean) {
    this.userLoggedSubject = new BehaviorSubject<boolean>(initialState);
    this.userLogged$ = this.userLoggedSubject.asObservable();
  }

  abstract login(): void;
  abstract getCurrentUser(): AuthResponse;
  abstract logout(): void;
}
