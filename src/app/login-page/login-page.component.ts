import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public email: string = '';
  public password: string = '';

  constructor(private myService: AuthService) { }

  ngOnInit(): void {
  }

  public auth(): void {
    this.myService.isAuth = true;
  }

}
