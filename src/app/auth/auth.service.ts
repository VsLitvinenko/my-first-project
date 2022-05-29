import { Injectable } from '@angular/core';
import { doRequest } from "../functions";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth = false;
  public token: string = '';

  constructor() {
  }

  public async login(login: string, password: string): Promise<void> {
    const body = { login, password };
    const res = await doRequest('blabla/login', 'POST', body);
    this.isAuth = true;
    this.token = res.token;
  }

  public logout(): void {
    this.isAuth = false;
    this.token = '';
  }
}
