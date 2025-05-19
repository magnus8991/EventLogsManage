import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {EventService} from "@core/services/event-service.interface";
import {NotificationService} from "../../shared/services/notification.service";
import { GetAllEvents } from "@core/models/event/get-all-event";
import { PageEvent } from "@angular/material/paginator";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrl: "./event-list.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventListComponent implements OnInit {
  events: GetAllEvents[] = [];
  displayedColumns = ['eventLogId','description','eventType','eventDate'];
  totalElements: number = 0;
  pageSize: number = 10;
  page: number = 0;
  public filterForm!: FormGroup;

  constructor(
    private EventService: EventService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.createForm();
    this.fetchEvents();
  }
  public fetchEvents(): void {
    this.getEventsByFilter();
  }

  public handlePageEvent(event: PageEvent){
    this.totalElements = event.length;
    this.pageSize = event.pageSize;
    this.page = event.pageIndex;

    this.getEventsByFilter();
  }
  
  private createForm(): void {
    this.filterForm = this.formBuilder.group({
      InitialDate: ["", Validators.required],
      FinalDate: ["", Validators.required],
      EventType: [0, Validators.required]
    });
  }

  public getEventsByFilter(){
    let initialDate: Date = new Date(this.filterForm.get('InitialDate')?.value);
    let finalDate: Date = new Date(this.filterForm.get('FinalDate')?.value);
    let eventType: number = this.filterForm.get('EventType')?.value;
    this.EventService.getByFilter(this.page + 1, this.pageSize, initialDate, finalDate, 
      (eventType == 0 ? undefined : eventType)).subscribe( {
      next: events => {
        this.totalElements = events.data?.pagination.totalElements!;
        this.pageSize = events.data?.pagination.pageSize!;
        this.events = events.data?.records ?? []; 
        this.changeDetectorRefs.detectChanges();
      },
      error: _ => {
        this.notificationService.showError("Ha ocurrido un error al consultar las materias");
      }
    });
  }

  public resetFilters(){
    this.createForm();
  }
}
