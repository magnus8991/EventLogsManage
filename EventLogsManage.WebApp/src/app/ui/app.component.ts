import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  RouterLink, RouterModule,
  RouterOutlet,
} from "@angular/router";
import { SharedModule } from "./shared/shared.module";
import { LoginService } from "@core/services/login-service.interface";
import { LoginRepository } from "@infrastructure/repositories/login.repository";
import { HttpService } from "@infrastructure/http/http.service";
import {AuthService} from "@core/services/auth-service.interface";
import {AuthRepository} from "@infrastructure/repositories/auth.repository";
import {LayoutModule} from "./layout/layout.module";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedModule, RouterLink, RouterModule, LayoutModule],
  providers: [
    HttpService,
    { provide: LoginService, useClass: LoginRepository },
    { provide: AuthService, useClass: AuthRepository }
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {

}
