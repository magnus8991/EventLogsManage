import { Observable } from "rxjs";
import {GetSubjectByIdentificationDto} from "@core/models/subject/get-subject-by-identification";
import {GetAllSubject} from "@core/models/subject/get-all-subject";

export abstract class SubjectService {
  abstract getAll(): Observable<GetAllSubject[]>;
  abstract getByIdentification(identification: string): Observable<GetSubjectByIdentificationDto[]>;
}
