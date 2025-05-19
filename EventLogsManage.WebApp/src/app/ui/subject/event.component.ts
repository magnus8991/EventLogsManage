import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MODULES } from "../routes.constants";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrl: "./event.component.css",
})
export class EventComponent implements OnInit {
  formControl!: FormGroup;
  filter!: string;
  constructor(
    private formBuilder: FormBuilder
  ) {}
  private CreateForm(): void {
    this.formControl = this.formBuilder.group({
      user: [""],
    });
  }
  ngOnInit(): void {
    this.CreateForm();
  }
  handleSearchEvent(filter: string) {
  }
  public MODULES = MODULES;
}
