import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProceedReportModel } from 'src/app/models/report/proceed-report-model/proceed-report-model';
import { GetProceedsReportModel } from 'src/app/models/report/proceed-report-model/get-proceeds-report-model';
import { Status } from 'src/app/models/status';
@Injectable({
  providedIn: 'root'
})
export class ProceedReportService {

  constructor(private http: HttpClient) { }

  GetProceedReportUrl = environment.apiUrl + "GetProceedReport"
  GetDataReportUrl = environment.apiUrl + "GetDataReport"
  DeleteReportUrl = environment.apiUrl + "DeleteReport"

  GetProceedReport(data: GetProceedsReportModel) {
    return this.http.post(this.GetProceedReportUrl, data, { responseType: 'blob' })
  }
  GetDataReport(data: GetProceedsReportModel): Observable<ProceedReportModel> {
    return this.http.post<ProceedReportModel>(this.GetDataReportUrl, data)
  }
  DeleteReport(data: GetProceedsReportModel): Observable<Status> {
    return this.http.post<Status>(this.DeleteReportUrl, data);
  }
}
