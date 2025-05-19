import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SUBJECTS } from "../routes.constants";
import {SubjectComponent} from "./subject.component";
import {AddSubjectsComponent} from "./add-subjects/add-subjects.component";

const routes: Routes = [
  {
    path: "",
    component: SubjectComponent,
  },
  {
    path: SUBJECTS.GET_SUBJECTS_BY_IDENTIFICATION,
    component: SubjectComponent,
  },
  {
    path: SUBJECTS.ADD,
    component: AddSubjectsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectRoutingModule {}
