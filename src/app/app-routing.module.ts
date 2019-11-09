import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ReportDownloadComponent } from './reports/report.download.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full',
    },
    {
        path: 'report', component: ReportDownloadComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
