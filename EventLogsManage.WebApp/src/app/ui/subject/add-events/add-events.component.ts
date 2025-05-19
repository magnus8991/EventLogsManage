import { Component, OnInit, Input } from "@angular/core";
import { NotificationService } from "../../shared/services/notification.service";
import { EventService } from "@core/services/event-service.interface";
import { MODULES } from "../../routes.constants";
import {Location} from "@angular/common";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CreateEvent } from "@core/models/event/create-event";

@Component({
  selector: "app-add-events",
  templateUrl: "./add-events.component.html",
  styleUrls: ["./add-events.component.css"],
})
export class AddEventsComponent implements OnInit {
  public isLoading = false;
  public eventForm!: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
    private eventService: EventService,
    private notificationService: NotificationService,
    private location: Location,
  ) {}

  ngOnInit(): void {
      this.createForm();
    }
    
    private createForm(): void {
      this.eventForm = this.formBuilder.group({
        Description: ["", Validators.required],
        EventDate: ["", Validators.required]
      });
    }
  
    save(): void {
      if (this.eventForm.valid) {
        this.isLoading = true;
        const createEvent: CreateEvent = new CreateEvent(
          this.eventForm.get("Description")?.value,
          this.eventForm.get("EventDate")?.value
        );
  
        this.eventService.createEvent(createEvent).subscribe({
          next: (result) => {
            this.notificationService.showSuccess(result.message);
            this.eventForm.get("Description")?.patchValue(""),
              this.eventForm.get("EvenDate")?.patchValue(""),
              this.eventForm.markAsUntouched();
          },
          error: (error) => {
            this.notificationService.showError("Error al registrar el evento");
            this.isLoading = false;
          },
          complete: () => {
            this.isLoading = false;
          },
        });
      }
    }
  
    back() {
     this.location.back();
    }
}
