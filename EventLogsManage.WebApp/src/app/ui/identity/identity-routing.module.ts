import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {CreateStudentComponent} from "./create-student/create-student.component";
import {IDENTITIES} from "../routes.constants";

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: IDENTITIES.LOGIN, component: LoginComponent},
  { path: IDENTITIES.ADD, component: CreateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdentityRoutingModule {}
