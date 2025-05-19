import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {IDENTITIES} from "../routes.constants";

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: IDENTITIES.LOGIN, component: LoginComponent},
  { path: IDENTITIES.ADD, component: CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdentityRoutingModule {}
