import { ResponseBase } from "@core/models/response/response-base";
import { CreateUser } from "@core/models/user/create-user.model";
import { Observable } from "rxjs";

export abstract class UserService {
  abstract createUser(student: CreateUser): Observable<ResponseBase<any>>;
}
