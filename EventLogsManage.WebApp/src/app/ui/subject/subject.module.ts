import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {SubjectRoutingModule} from "./subject-routing.module";
import { SubjectComponent } from "./subject.component";
import { SubjectListComponent } from "./subject-list/subject-list.component";
import { StudentService } from "@core/services/student-service.interface";
import { StudentRepository } from "@infrastructure/repositories/student-repository";
import {HttpService} from "@infrastructure/http/http.service";
import {SubjectService} from "@core/services/subject-service.interface";
import {SubjectRepository} from "@infrastructure/repositories/subject-repository";
import {AddSubjectsComponent} from "./add-subjects/add-subjects.component";

@NgModule({
  declarations: [SubjectComponent,  SubjectListComponent, AddSubjectsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SubjectRoutingModule,
    FormsModule,
    SharedModule,
  ],
  providers: [
    HttpService,
    { provide: SubjectService, useClass: SubjectRepository },
    { provide: StudentService, useClass: StudentRepository },
  ],
  exports: [],
})
export class SubjectModule {}
