import { Injectable } from "@angular/core";
import { CreateStudent } from "@core/models/student/create-student.model";
import { StudentService } from "@core/services/student-service.interface";
import { environment, resources } from "@env/environment";
import { HttpService } from "@infrastructure/http/http.service";
import { Observable } from "rxjs";
import {GetAllStudent} from "@core/models/student/get-all-student.model";

@Injectable({
  providedIn: "root",
})
export class StudentRepository extends StudentService {
  baseUrl = `${environment.apiUrl}${environment.apiSuffix}${resources.student}`;
  constructor(protected httpService: HttpService) {
    super();
  }
  override createStudent(user: CreateStudent): Observable<void> {
    return this.httpService.doPost<CreateStudent, void>(this.baseUrl, user);
  }

  override getAll(
    identification: string,
    subjectId: string
  ): Observable<any> {
    return this.httpService.doGet<GetAllStudent[]>(
      `${this.baseUrl}/${identification}/${subjectId}`
    );
  }
}
