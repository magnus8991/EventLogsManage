import { Injectable } from "@angular/core";
import { environment, resources } from "@env/environment";
import { HttpService } from "@infrastructure/http/http.service";
import { Observable } from "rxjs";
import {SubjectService} from "@core/services/subject-service.interface";
import {GetSubjectByIdentificationDto} from "@core/models/subject/get-subject-by-identification";
import {GetAllSubject} from "@core/models/subject/get-all-subject";

@Injectable({
  providedIn: "root",
})
export class SubjectRepository extends SubjectService {
  baseUrl = `${environment.apiUrl}${environment.apiSuffix}${resources.subjects}`;
  constructor(protected httpService: HttpService) {
    super();
  }

  getByIdentification(identification: string): Observable<GetSubjectByIdentificationDto[]> {
    return this.httpService.doGet<GetSubjectByIdentificationDto[]>(
      `${this.baseUrl}/${identification}`
    );
  }

  getAll(): Observable<GetAllSubject[]> {
    return this.httpService.doGet<GetAllSubject[]>(
      `${this.baseUrl}`
    );
  }
}
