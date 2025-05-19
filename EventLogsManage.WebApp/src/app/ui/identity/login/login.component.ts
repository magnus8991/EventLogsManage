import { Component, OnInit } from "@angular/core";

import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NotificationService } from "../../shared/services/notification.service";
import { Router } from "@angular/router";
import { LoginService } from "@core/services/login-service.interface";
import { Auth } from "@core/models/login/auth.model";
import { MODULES } from "../../routes.constants";
import {AuthResponse} from "@core/models/login/auth-response.model";
import {AuthService} from "@core/services/auth-service.interface";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent implements OnInit {

  userName!: string;
  userLogged: boolean = false;
  userRegister: boolean = false;
  MODULES = MODULES;

  ngOnInit(): void {
    let stringIdentity: string | null = localStorage.getItem("auth");
    if (stringIdentity) {
      let auth: AuthResponse = JSON.parse(stringIdentity);
      this.userName = auth.name;
      this.userLogged = true;
      this.router.navigate([MODULES.IDENTITIES.ADD]);
    }
    this.createForm();
  }

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private notification: NotificationService,
    private authService: AuthService,
    private router: Router)
  {}

  private createForm(): void {
    this.loginForm = this.formBuilder.group({
      Identification: ["", Validators.required],
      Password: ["", Validators.required]
    });
  }

  public loginForm!: FormGroup;

  login() {
    let identification: string = this.loginForm.get('Identification')?.value;
    let password: string = this.loginForm.get('Password')?.value;
    let auth = new Auth(identification, password);
    this.loginService.login(auth).subscribe(response => {
      this.userName = response.data?.name!;
      this.loginForm.get('Identification')?.reset();
      localStorage.setItem("auth", JSON.stringify(response.data));
      this.authService.login()
      this.router.navigate([MODULES.EVENTS.GET_EVENTS_BY_FILTER]);
    }, (error) => {this.notification.showError('Falló al iniciar sesión');
    });
  }

  registerUser() {
    this.userRegister = true;
    this.router.navigate([MODULES.IDENTITIES.ADD]);
  }

}
