import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpService } from "@infrastructure/http/http.service";
import {IdentityRoutingModule} from "./identity-routing.module";
import {CreateStudentComponent} from "./create-student/create-student.component";
import {LoginComponent} from "./login/login.component";
import {StudentRepository} from "@infrastructure/repositories/student-repository";
import {StudentService} from "@core/services/student-service.interface";


@NgModule({
  declarations: [LoginComponent, CreateStudentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    IdentityRoutingModule
  ],
  providers: [
    HttpService,
    { provide: StudentService, useClass: StudentRepository }
  ],
  exports: [],
})
export class IdentityModule {}
