import { MenuReportsComponent } from '../pages/menu-reports/menu-reports.component';
import { Routes } from '@angular/router';
import { MainDashboardComponent } from '../pages/main-dashboard/main-dashboard.component';
import { TableReportsComponent } from '../components/table-reports/table-reports.component';
import { PagesComponent } from '../pages/pages.component';
import { LoginComponent } from '../pages/login/login.component';
export const routes: Routes = [
    {
        //   rutas protegidas o que necesitas pasar antes por login
        // es decir a las rutas hijas les va aplicar el html de pages.component.html
        path: '',
        component: PagesComponent,
        children: [
            { path: 'menu-reports', component: MenuReportsComponent, data: { title: "Dashboard Reportes" } },
            { path: 'main-dashboard', component: MainDashboardComponent, data: { title: "Dashboard Principal" } },
            { path: 'report/:num', component: TableReportsComponent, data: { title: "Dashboard Reportes" } },
            { path: "", redirectTo: "/menu-reports", pathMatch: "full" }
        ]

    },
    //  mientras que a las rutas que no sean hijas las hará pasar por el app.component.html
    { path: 'login', component: LoginComponent },




];