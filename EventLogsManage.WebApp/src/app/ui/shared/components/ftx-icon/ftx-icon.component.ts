import { Component, Input } from "@angular/core";

@Component({
  selector: "ftx-icon",
  templateUrl: "./ftx-icon.component.html",
  styleUrl: "./ftx-icon.component.css",
})
export class FtxIconComponent {
  @Input() icon!: string;
}
