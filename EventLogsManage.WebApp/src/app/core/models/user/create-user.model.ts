export class CreateUser {
  name: string;
  identification: string;
  password: string;
  constructor(
    name: string,
    identification: string,
    password: string,
  ) {
    this.name = name;
    this.identification = identification;
    this.password = password;
  }
}
