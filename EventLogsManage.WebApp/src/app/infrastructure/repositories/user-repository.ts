import { Injectable } from "@angular/core";
import { ResponseBase } from "@core/models/response/response-base";
import { CreateUser } from "@core/models/user/create-user.model";
import { UserService } from "@core/services/user-service.interface";
import { environment, resources } from "@env/environment";
import { HttpService } from "@infrastructure/http/http.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserRepository extends UserService {
  baseUrl = `${environment.apiUrl}${environment.apiSuffix}${resources.users}`;
  constructor(protected httpService: HttpService) {
    super();
  }
  override createUser(user: CreateUser): Observable<ResponseBase<any>> {
    return this.httpService.doPost<CreateUser, ResponseBase<any>>(this.baseUrl, user);
  }
}
