export class Auth {
  identification: string;
  password: string;
  constructor(
    identification: string,
    password: string
  ) {
    this.identification = identification;
    this.password = password;
  }
}
