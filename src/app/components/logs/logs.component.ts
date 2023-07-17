import { Component, OnInit } from '@angular/core';
import { GetLogsModel } from 'src/app/models/login/get-logs-model';
import { LogsModel } from 'src/app/models/login/logs-model';
import { LoginService } from 'src/app/services/login-service/login.service';
import { SnackBarService } from 'src/app/services/snacke-bar-service/snack-bar.service';
import { TokenService } from 'src/app/services/token-service/token.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  constructor(private tokenService: TokenService, private snackBarService: SnackBarService, private loginService: LoginService) { }

  messageNoConnect = 'Нет соединения, попробуйте позже.';
  messageFailLogin = 'Вход не разрешен, имя или пароль неверны.';
  messageStatusTrue = 'Ваша сообщение в обработке.';
  action = 'Ok';
  styleNoConnect = 'red-snackbar';

  logs: LogsModel[]

  ngOnInit(): void {
    this.getLogs()
  }

  getLogs() {
    this.loginService.getLogs(new GetLogsModel(this.tokenService.getToken())).subscribe({
      next: result => {
        this.logs = result
      },
      error: error => {
        console.log(error)
        this.snackBarService.openSnackBar('Ошибка', this.action, this.styleNoConnect)
      }
    })
  }
}
