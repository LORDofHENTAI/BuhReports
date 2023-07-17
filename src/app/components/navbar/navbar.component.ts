import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token-service/token.service';
import { LoginService } from 'src/app/services/login-service/login.service';
import { SnackBarService } from 'src/app/services/snacke-bar-service/snack-bar.service';
import { Logout } from 'src/app/models/login/logout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoginUser = false;
  userName = '';
  isAdminIshop = false;


  messageNoConnect = 'Нет соединения, попробуйте позже.';
  messageFailLogin = 'Вход не разрешен, имя или пароль неверны.';
  messageStatusTrue = 'Ваша сообщение в обработке.';
  action = 'Ok';
  styleNoConnect = 'red-snackbar';


  constructor(
    private router: Router,
    private tokenService: TokenService,
    private loginService: LoginService,
    private snackBarService: SnackBarService
  ) {
    this.tokenService.events$.forEach(value => { this.eventLogin(value) });
  }
  ngOnInit(): void {
    if (this.tokenService.isLoginUser()) {
      this.isLoginUser = true;
      this.userName = this.tokenService.getLogin();
      this.router.navigate(['/reports']);
    }
    else {
      this.isLoginUser = false;
      this.router.navigate(['/login']);
    }
  }

  eventLogin(event: boolean) {
    if (event === true)
      this.isLoginUser = event;
    else {
      this.isLoginUser = event;
      this.router.navigate(['/login']);
    }
  }

  onClickLogout() {
    this.loginService.postLogout(new Logout(this.tokenService.getLogin(), this.tokenService.getToken())).subscribe({
      next: result => {

        switch (result.status) {
          case 'BadAuth':
            this.snackBarService.openSnackBar('Токен недействителен', this.action, this.styleNoConnect)
            break
          case 'error':
            this.snackBarService.openSnackBar('Ошибка', this.action, this.styleNoConnect)
            break
          case 'null':
            this.snackBarService.openSnackBar('Таблица пуста', this.action, this.styleNoConnect)
            break
          case 'true':
            this.snackBarService.openSnackBar('Выход из учетной записи', this.action)
            localStorage.clear();
            this.tokenService.deleteCookie();
            this.isLoginUser = false;
            this.router.navigate(['/login']);
            break
        }
      },
      error: error => {
        console.log(error);
        this.snackBarService.openSnackBar(this.messageNoConnect, this.action, this.styleNoConnect)
      }
    })
  }
}
