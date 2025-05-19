import { CreateStudent } from "@core/models/student/create-student.model";
import { Observable } from "rxjs";
import {GetAllStudent} from "@core/models/student/get-all-student.model";

export abstract class StudentService {
  abstract createStudent(student: CreateStudent): Observable<void>;
  abstract getAll(identification: string, subjectId: string): Observable<GetAllStudent[]>;
}
