import { NgModule } from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    MatToolbarModule,
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: [HeaderComponent,  FooterComponent],
})
export class LayoutModule {}
