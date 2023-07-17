import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { HttpClient } from '@angular/common/http'
import { LoginQuery } from 'src/app/models/login/login-query';
import { LoginResponse } from 'src/app/models/login/login-response';
import { Observable } from 'rxjs';
import { Status } from 'src/app/models/status';
import { Logout } from 'src/app/models/login/logout';
import { LogsModel } from 'src/app/models/login/logs-model';
import { GetLogsModel } from 'src/app/models/login/get-logs-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlLogin = environment.apiUrl + 'Login'; //адрес для логинизации
  private urlLogout = environment.apiUrl + 'Logout'; //адрес для логаута
  urlLogs = environment.apiUrl + 'GetLogs'

  constructor(private http: HttpClient) { }

  getLogin(login: LoginQuery): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.urlLogin}`, login);
  }

  postLogout(login: Logout): Observable<Status> {
    console.log(login)
    return this.http.post<Status>(`${this.urlLogout}`, login);
  }
  getLogs(data: GetLogsModel): Observable<LogsModel[]> {
    console.log(data)
    return this.http.post<LogsModel[]>(this.urlLogs, data)
  }
}
