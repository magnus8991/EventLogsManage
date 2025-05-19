import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {EventRoutingModule} from "./event-routing.module";
import { EventComponent } from "./event.component";
import { EventListComponent } from "./event-list/event-list.component";
import { UserService } from "@core/services/user-service.interface";
import { UserRepository } from "@infrastructure/repositories/user-repository";
import {HttpService} from "@infrastructure/http/http.service";
import {EventService} from "@core/services/event-service.interface";
import {EventRepository} from "@infrastructure/repositories/event-repository";
import {AddEventsComponent} from "./add-events/add-events.component";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [EventComponent,  EventListComponent, AddEventsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EventRoutingModule,
    FormsModule,
    SharedModule,
    MatTableModule
  ],
  providers: [
    HttpService,
    { provide: EventService, useClass: EventRepository },
    { provide: UserService, useClass: UserRepository },
  ],
  exports: [],
})
export class SubjectModule {}
