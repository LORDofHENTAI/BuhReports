import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token-service/token.service';
import { SnackBarService } from 'src/app/services/snacke-bar-service/snack-bar.service';
import { ProceedReportService } from 'src/app/services/proceed-report-service/proceed-report.service';
import { GetProceedsReportModel } from 'src/app/models/report/proceed-report-model/get-proceeds-report-model';
import { ProceedReportModel } from 'src/app/models/report/proceed-report-model/proceed-report-model';
import { saveAs } from 'file-saver';


interface Month {
  value: number;
  viewValue: string;
}



@Component({
  selector: 'app-proceed-report',
  templateUrl: './proceed-report.component.html',
  styleUrls: ['./proceed-report.component.scss']
})
export class ProceedReportComponent implements OnInit {

  month: Month[] = [
    { value: 1, viewValue: 'Январь' },
    { value: 2, viewValue: 'Февраль' },
    { value: 3, viewValue: 'Март' },
    { value: 4, viewValue: 'Апрель' },
    { value: 5, viewValue: 'Май' },
    { value: 6, viewValue: 'Июнь' },
    { value: 7, viewValue: 'Июль' },
    { value: 8, viewValue: 'Август' },
    { value: 9, viewValue: 'Сентябрь' },
    { value: 10, viewValue: 'Октябрь' },
    { value: 11, viewValue: 'Ноябрь' },
    { value: 12, viewValue: 'Декабрь' },
  ];
  messageNoConnect = 'Нет соединения, попробуйте позже.';
  messageFailLogin = 'Вход не разрешен, имя или пароль неверны.';
  messageStatusTrue = 'Ваша сообщение в обработке.';
  action = 'Ok';
  styleNoConnect = 'red-snackbar';

  constructor(
    private tokenService: TokenService,
    private snackBarService: SnackBarService,
    private proceedService: ProceedReportService
  ) { }

  loaderShow: boolean = false
  selectedYear: number = (new Date()).getFullYear()
  selectedMonth: number = (new Date()).getMonth() + 1


  ngOnInit(): void {

  }
  chosenYearDate: Date;

  getExcelReport() {
    this.loaderShow = true
    this.proceedService.GetProceedReport(new GetProceedsReportModel(this.tokenService.getToken(), this.selectedMonth, this.selectedYear)).subscribe({
      next: result => {
        this.loaderShow = false
        saveAs(result, `Отчет по выручке за ${this.selectedMonth} ${this.selectedYear}`);
      },
      error: error => {
        console.log(error)
        this.loaderShow = false
        this.snackBarService.openSnackBar('Ошибка', this.action, this.styleNoConnect)
      }
    })
  }

  DeleteReport() {
    this.proceedService.DeleteReport(new GetProceedsReportModel(this.tokenService.getToken(), this.selectedMonth, this.selectedMonth)).subscribe({
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
            this.snackBarService.openSnackBar('Отчет отчищен', this.action)
            break
        }
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
