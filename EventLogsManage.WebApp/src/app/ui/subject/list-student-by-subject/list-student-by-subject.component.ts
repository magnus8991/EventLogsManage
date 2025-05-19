import { Component, OnInit } from "@angular/core";
import { Student } from "@core/models/student/student.model";
import { StudentService } from "@core/services/student-service.interface";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-list-student-by-subject",
  templateUrl: "./student-list.component.html",
  styleUrl: "./list-student-by-subject.component.css",
})
export class ListStudentBySubjectComponent implements OnInit {
  filter: string = "";
  dataSearch: string = "";
  totalItems = 50;
  itemsPerPage = 5;
  currentPage = 0;
  pageSizeOptions = [5, 10, 15];
  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private dialog: MatDialog,
    private router: ActivatedRoute
  ) {;
  }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      let identification: string = params['identification'];
      let subjectId: string = params['subjectId'];
      this.fetchStudents(identification, subjectId);
    });
  }
  public fetchStudents(
    identification: string,
    subjectId: string
  ): void {
    this.studentService
      .getAll(identification, subjectId)
      .subscribe((result) => {
        this.students = result;
        this.totalItems = result.length;
      });
  }

  onPageChange(event: any) {
  }

}
