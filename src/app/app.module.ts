declare var require: any;
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbDateParserFormatter, NgbModule, NgbTabset} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { ReportDownloadComponent } from './reports/report.download.component';
import { ReportService } from './reports/report.service';




@NgModule({
  declarations: [
        AppComponent, ReportDownloadComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
    providers: [
        NgbTabset, ReportService
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
  ngOnInit() {
  }
}

