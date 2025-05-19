import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MODULES } from "../routes.constants";

@Component({
  selector: "app-subject",
  templateUrl: "./subject.component.html",
  styleUrl: "./subject.component.css",
})
export class SubjectComponent implements OnInit {
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
