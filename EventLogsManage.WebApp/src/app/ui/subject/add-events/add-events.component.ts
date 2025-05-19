import { Component, OnInit, Input } from "@angular/core";
import { NotificationService } from "../../shared/services/notification.service";
import { EventService } from "@core/services/event-service.interface";
import { MODULES } from "../../routes.constants";
import {Location} from "@angular/common";

@Component({
  selector: "app-add-events",
  templateUrl: "./add-events.component.html",
  styleUrls: ["./add-events.component.css"],
})
export class AddEventsComponent implements OnInit {
  @Input() maxSubjects: number = 3;

  constructor(
    private EventService: EventService,
    private notificationService: NotificationService,
    private location: Location,
  ) {}

  ngOnInit(): void {
  }

  onSubjectSelectionChange(): void {
  }

  isSubjectSelected(): boolean {
    return true;
  }

  matricular(): void {
    console.log('Materias matriculadas:', []);
    // Aquí puedes agregar la lógica para matricular las materias usando los IDs seleccionados
  }

  volver(): void {
    this.location.back();
  }

  protected readonly MODULES = MODULES;
}
