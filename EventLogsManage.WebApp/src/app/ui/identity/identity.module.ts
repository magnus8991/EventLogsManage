import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpService } from "@infrastructure/http/http.service";
import {IdentityRoutingModule} from "./identity-routing.module";
import {CreateUserComponent} from "./create-user/create-user.component";
import {LoginComponent} from "./login/login.component";
import {UserRepository} from "@infrastructure/repositories/user-repository";
import {UserService} from "@core/services/user-service.interface";


@NgModule({
  declarations: [LoginComponent, CreateUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    IdentityRoutingModule
  ],
  providers: [
    HttpService,
    { provide: UserService, useClass: UserRepository }
  ],
  exports: [],
})
export class IdentityModule {}
