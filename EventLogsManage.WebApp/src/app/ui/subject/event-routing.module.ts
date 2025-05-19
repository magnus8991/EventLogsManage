import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EVENTS } from "../routes.constants";
import {EventComponent} from "./event.component";
import {AddEventsComponent} from "./add-events/add-events.component";

const routes: Routes = [
  {
    path: "",
    component: EventComponent,
  },
  {
    path: EVENTS.GET_EVENTS_BY_FILTER,
    component: EventComponent,
  },
  {
    path: EVENTS.ADD,
    component: AddEventsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
