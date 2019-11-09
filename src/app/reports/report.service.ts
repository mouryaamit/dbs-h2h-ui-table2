import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";



@Injectable()
export class ReportService {

    url: string = 'http://localhost:8080';

    constructor(private http: HttpClient) {

    }

    downloadReport(reportType: string): any {
        
    }
}
