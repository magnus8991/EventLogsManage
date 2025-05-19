import { Component, OnInit, Input } from "@angular/core";
import { NotificationService } from "../../shared/services/notification.service";
import { GetSubjectByIdentificationDto } from "@core/models/subject/get-subject-by-identification";
import { SubjectService } from "@core/services/subject-service.interface";
import { MODULES } from "../../routes.constants";
import {Location} from "@angular/common";

@Component({
  selector: "app-add-subjects",
  templateUrl: "./add-subjects.component.html",
  styleUrls: ["./add-subjects.component.css"],
})
export class AddSubjectsComponent implements OnInit {
  @Input() maxSubjects: number = 3;
  subjects: GetSubjectByIdentificationDto[] = [];
  selectedSubjects: GetSubjectByIdentificationDto[] = [];

  constructor(
    private subjectService: SubjectService,
    private notificationService: NotificationService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.fetchSubjects();
    if (this.maxSubjects === 0){
      this.notificationService.showError("en este momento ya no tienes materias disponibles para matricular, cantidad: " + this.maxSubjects)
    }
    else {
      this.notificationService.showInfo("la cantidad de materias disponibles para matricular son: " + this.maxSubjects)
    }
  }

  fetchSubjects(): void {
    this.subjectService.getAll().subscribe({
      next: (subjects) => {
        this.subjects = subjects;
      },
      error: (_) => {
        this.notificationService.showError("Ha ocurrido un error al consultar las materias");
      },
    });
  }

  onSubjectSelectionChange(subject: GetSubjectByIdentificationDto, event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const isChecked = checkbox.checked;

    if (isChecked) {
      if (this.selectedSubjects.length >= this.maxSubjects) {
        this.notificationService.showError(`No debe seleccionar más de ${this.maxSubjects} materias`);
        checkbox.checked = false;
        return;
      }
      this.selectedSubjects.push(subject);
    } else {
      this.selectedSubjects = this.selectedSubjects.filter(s => s.id !== subject.id);
    }
  }

  isSubjectSelected(subject: GetSubjectByIdentificationDto): boolean {
    return this.selectedSubjects.some(s => s.id === subject.id);
  }

  matricular(): void {
    const subjectIds = this.selectedSubjects.map(subject => subject.id);
    console.log('Materias matriculadas:', subjectIds);
    // Aquí puedes agregar la lógica para matricular las materias usando los IDs seleccionados
  }

  volver(): void {
    this.location.back();
  }

  protected readonly MODULES = MODULES;
}
