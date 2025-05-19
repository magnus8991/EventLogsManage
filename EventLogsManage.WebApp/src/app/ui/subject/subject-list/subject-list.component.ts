import { Component, OnInit } from "@angular/core";
import {GetSubjectByIdentificationDto} from "@core/models/subject/get-subject-by-identification";
import {AuthService} from "@core/services/auth-service.interface";
import {SubjectService} from "@core/services/subject-service.interface";
import {NotificationService} from "../../shared/services/notification.service";

@Component({
  selector: "app-subject-list",
  templateUrl: "./subject-list.component.html",
  styleUrl: "./subject-list.component.css",
})
export class SubjectListComponent implements OnInit {
  subjects: GetSubjectByIdentificationDto[] = [];
  constructor(
    private subjectService: SubjectService,
    private authService: AuthService,
    private notificationService: NotificationService,
  ) {}
  ngOnInit(): void {
    this.fetchSubjects();
  }
  public fetchSubjects(): void {
    let studentInfo = this.authService.getCurrentUser();
    this.subjectService.getByIdentification(studentInfo.identification).subscribe( {
      next: subjects => {
        this.subjects = subjects;
      },
      error: _ => {
        this.notificationService.showError("Ha ocurrido un error al consultar las materias");
      }
    });
  }

  displayStudents(test: string) {

  }
}
