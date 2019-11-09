import { Component } from '@angular/core';
import { ReportService } from './report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './report.download.component.html'
  
})
export class ReportDownloadComponent {
    reportType: string = 'EOD';

    constructor(private reportService: ReportService) {

    }

    downloadReport() {
        this.reportService.downloadReport(this.reportType).subscribe(res => {
            console.log('');
        });
    }
}
