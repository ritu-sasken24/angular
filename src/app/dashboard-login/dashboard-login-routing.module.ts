import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLoginComponent } from './dashboard-login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '', component: DashboardLoginComponent
    },
    // {
    //     path: 'dashboard', component: DashboardComponent
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardLoginRoutingModule { }
