export interface GetAllSubject {
  id: string;
  name: string;
  professor: GetAllSubjectDto;
}

export interface GetAllSubjectDto {
  name: string;
}
