import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotificationService } from "../../shared/services/notification.service";
import { CreateUser } from "@core/models/user/create-user.model";
import { Location } from "@angular/common";
import {UserService} from "@core/services/user-service.interface";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrl: "./create-user.component.css",
})
export class CreateUserComponent implements OnInit {
  public userForm!: FormGroup;
  public isLoading = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private location: Location,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.userForm = this.formBuilder.group({
      Name: ["", Validators.required],
      Identification: ["", Validators.required],
      Password: ["", Validators.required],
    });
  }

  save(): void {
    if (this.userForm.valid) {
      this.isLoading = true;
      const createUser: CreateUser = new CreateUser(
        this.userForm.get("Name")?.value,
        this.userForm.get("Identification")?.value,
        this.userForm.get("Password")?.value,
      );

      this.userService.createUser(createUser).subscribe({
        next: (result) => {
          this.notificationService.showSuccess(result.message);
          this.userForm.get("Name")?.patchValue(""),
            this.userForm.get("Identification")?.patchValue(""),
            this.userForm.get("Password")?.patchValue(""),
            this.userForm.markAsUntouched();
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
