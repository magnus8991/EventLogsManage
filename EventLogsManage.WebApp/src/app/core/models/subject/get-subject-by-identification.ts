export interface GetSubjectByIdentificationDto {
  id: string;
  name: string;
  professor: GetSubjectByIdentificationProfessorDto;
}

export interface GetSubjectByIdentificationProfessorDto {
  name: string;
}
