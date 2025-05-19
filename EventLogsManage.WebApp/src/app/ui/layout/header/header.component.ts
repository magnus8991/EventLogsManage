import {Component, OnInit} from '@angular/core';
import {AuthResponse} from "@core/models/login/auth-response.model";
import {Router} from "@angular/router";
import {MODULES} from "../../routes.constants";
import {AuthService} from "@core/services/auth-service.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  userLogged: boolean = JSON.parse(localStorage.getItem("userLogged") || "false");
  studentName: string = "";

  ngOnInit(): void {
    this.authService.userLogged$.subscribe(logged => {
      this.userLogged = logged;
      let stringAuth: string | null = localStorage.getItem("auth");
      if (logged) {
        if (stringAuth) {
          let auth: AuthResponse = JSON.parse(stringAuth);
          this.studentName = auth.name;
        }
      }
    });
  }

  constructor(private router: Router, private authService: AuthService)
  {
    let stringAuth: string | null = localStorage.getItem("auth");
    if (stringAuth) {
      let auth: AuthResponse = JSON.parse(stringAuth);
      this.studentName = auth.name;
      this.router.navigate([MODULES.SUBJECTS.GET_SUBJECTS_BY_IDENTIFICATION]);
    }
  }

  logout() {
    localStorage.removeItem("auth");
    this.authService.logout();
    this.router.navigate(['']);
  }
}
