import { Injectable } from "@angular/core";
import { environment, resources } from "@env/environment";
import { HttpService } from "@infrastructure/http/http.service";
import { Observable, concatMap, map } from "rxjs";
import { Auth } from "@core/models/login/auth.model";
import { AuthResponse } from "@core/models/login/auth-response.model";
import { LoginService } from "@core/services/login-service.interface";
import { ResponseBase } from "@core/models/response/response-base";

@Injectable({
  providedIn: "root",
})
export class LoginRepository extends LoginService {
  override login(auth: Auth): Observable<ResponseBase<AuthResponse>> {
    return this.httpService.doPost<Auth, ResponseBase<AuthResponse>>(`${this.baseUrl}`, auth);
  }
  baseUrl = `${environment.apiUrl}${environment.apiSuffix}${resources.auth}`;
  constructor(protected httpService: HttpService) {
    super();
  }
}
