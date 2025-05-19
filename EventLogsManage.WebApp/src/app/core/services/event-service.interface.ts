import { GetAllEvents } from "@core/models/event/get-all-event";
import { ResponseBase } from "@core/models/response/response-base";
import { ResponseWithPagination } from "@core/models/response/response-with-pagination";
import { Observable } from "rxjs";

export abstract class EventService {
  abstract getByFilter(page: number, pageSize: number, initialDate?: Date, finalDate?: Date, 
    eventType?: number): Observable<ResponseBase<ResponseWithPagination<GetAllEvents[]>>>;
}
