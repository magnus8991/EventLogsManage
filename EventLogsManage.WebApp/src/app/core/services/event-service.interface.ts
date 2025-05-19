import { GetAllEvents } from "@core/models/event/get-all-event";
import { ResponseWithPagination } from "@core/models/response/response-with-pagination";
import { Observable } from "rxjs";

export abstract class EventService {
  abstract getByFilter(page: number, pageSize: number, initialDate?: Date, finalDate?: Date, 
    eventType?: number): Observable<ResponseWithPagination<GetAllEvents[]>>;
}
