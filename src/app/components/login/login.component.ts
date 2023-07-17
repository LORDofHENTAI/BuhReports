import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginQuery } from 'src/app/models/login/login-query';
import { LoginService } from 'src/app/services/login-service/login.service';
import { SnackBarService } from 'src/app/services/snacke-bar-service/snack-bar.service';
import { TokenService } from 'src/app/services/token-service/token.service';
import { LoginResponse } from 'src/app/models/login/login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoginUser = false;
  loginQuery = new LoginQuery("", "");

  messageNoConnect = 'Нет соединения, попробуйте позже.';
  messageFailLogin = 'Вход не разрешен, имя или пароль неверны.';
  messageStatusTrue = 'Ваша сообщение в обработке.';
  action = 'Ok';
  styleNoConnect = 'red-snackbar';
  constructor(private router: Router, private tokenService: TokenService, private loginService: LoginService, private snackBarService: SnackBarService) { }

  loadingShow: boolean = false
  onClickLogin() {
    this.loadingShow = true
    this.loginService.getLogin(this.loginQuery).subscribe({
      next: response => {
        this.loadingShow = false
        if (this.checkResponse(response)) {
          if (response) {
            this.tokenService.setCookie(response);
            this.tokenService.logEvent(true);
            this.snackBarService.openSnackBar('Успешная авторизация', this.action);

            this.router.navigate(['reports']);
          } else
            this.snackBarService.openSnackBar('Доступ запрещен', this.action, this.styleNoConnect);
        }
        else
          this.snackBarService.openSnackBar(this.messageFailLogin, this.action, this.styleNoConnect);
      },
      error: error => {
        console.log(error);
        this.snackBarService.openSnackBar(this.messageNoConnect, this.action, this.styleNoConnect);
      }
    });
  }

  checkResponse(response: LoginResponse): boolean {
    if (response)
      if (response.token)
        if (response.token.length > 0)
          return true;
        else return false;
      else return false;
    else return false;
  }

}
