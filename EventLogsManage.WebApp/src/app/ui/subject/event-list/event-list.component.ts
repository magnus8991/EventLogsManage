import { Component, OnInit } from "@angular/core";
import {EventService} from "@core/services/event-service.interface";
import {NotificationService} from "../../shared/services/notification.service";
import { GetAllEvents } from "@core/models/event/get-all-event";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrl: "./event-list.component.css",
})
export class EventListComponent implements OnInit {
  events: GetAllEvents[] = [];
  constructor(
    private EventService: EventService,
    private notificationService: NotificationService,
  ) {}
  ngOnInit(): void {
    this.fetchEvents();
  }
  public fetchEvents(): void {
    this.EventService.getByFilter(1, 10).subscribe( {
      next: events => {
        this.events = events.records ?? [];
      },
      error: _ => {
        this.notificationService.showError("Ha ocurrido un error al consultar las materias");
      }
    });
  }
}
