export class CreateStudent {
  name: string;
  identification: string;
  constructor(
    name: string,
    identification: string,
  ) {
    this.name = name;
    this.identification = identification;
  }
}
