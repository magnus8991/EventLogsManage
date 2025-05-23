import { Injectable } from "@angular/core";
import { environment, resources } from "@env/environment";
import { HttpService } from "@infrastructure/http/http.service";
import { Observable } from "rxjs";
import {EventService} from "@core/services/event-service.interface";
import {GetAllEvents} from "@core/models/event/get-all-event";
import { ResponseWithPagination } from "@core/models/response/response-with-pagination";
import { ResponseBase } from "@core/models/response/response-base";
import { CreateEvent } from "@core/models/event/create-event";

@Injectable({
  providedIn: "root",
})
export class EventRepository extends EventService {
  baseUrl = `${environment.apiUrl}${environment.apiSuffix}${resources.events}`;
  constructor(protected httpService: HttpService) {
    super();
  }

  getByFilter(page: number, pageSize: number, initialDate?: Date, finalDate?: Date, 
    eventType?: number): Observable<ResponseBase<ResponseWithPagination<GetAllEvents[]>>> {
    return this.httpService.doPost<any, ResponseBase<ResponseWithPagination<GetAllEvents[]>>>(
      `${this.baseUrl}/list`, { page: page, pageSize: pageSize, initialDate: initialDate, 
        finalDate: finalDate, eventType: eventType
      });
  }

  override createEvent(event: CreateEvent): Observable<ResponseBase<any>> {
    return this.httpService.doPost<CreateEvent, ResponseBase<any>>(this.baseUrl, event);
  }
}
