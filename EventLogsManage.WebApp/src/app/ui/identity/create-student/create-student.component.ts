import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotificationService } from "../../shared/services/notification.service";
import { CreateStudent } from "@core/models/student/create-student.model";
import { Location } from "@angular/common";
import {StudentService} from "@core/services/student-service.interface";

@Component({
  selector: "app-create-student",
  templateUrl: "./create-student.component.html",
  styleUrl: "./create-student.component.css",
})
export class CreateStudentComponent implements OnInit {
  ngOnInit(): void {
    this.createForm();
  }
  private createForm(): void {
    this.studentForm = this.formBuilder.group({
      Name: ["", Validators.required],
      Identification: ["", Validators.required],
    });
  }
  public studentForm!: FormGroup;
  public isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private location: Location,
    private notificationService: NotificationService
  ) {}

  save(): void {
    if (this.studentForm.valid) {
      this.isLoading = true;
      const createStudent: CreateStudent = new CreateStudent(
        this.studentForm.get("Name")?.value,
        this.studentForm.get("Identification")?.value,
      );

      this.studentService.createStudent(createStudent).subscribe({
        next: () => {
          this.notificationService.showSuccess("Usuario creado con exito");
          this.studentForm.get("Name")?.patchValue(""),
            this.studentForm.get("Identification")?.patchValue(""),
            this.studentForm.markAsUntouched();
        },
        error: (error) => {
          this.notificationService.showError("Error al crear el usuario");
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }

  back() {
   this.location.back();
  }
}
