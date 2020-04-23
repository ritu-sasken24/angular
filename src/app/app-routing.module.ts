import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecHomeComponent } from './pages/sec-home/sec-home.component';
import { SecAboutUsComponent } from './pages/sec-about-us/sec-about-us.component';
import { SecSclComponent } from './pages/sec-scl/sec-scl.component';
import { SecEpicComponent } from './pages/sec-epic/sec-epic.component';
import { DashboardComponent } from './dashboard-login/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: SecHomeComponent },
  { path: 'Home', component: SecHomeComponent },
  { path: 'About-us', component: SecAboutUsComponent },
  { path: 'SCL', component: SecSclComponent },
  { path: 'EPIC', component: SecEpicComponent },
  {
    path: 'dashboard-login',
    loadChildren: () => import('./dashboard-login/dashboard-login.module').then(m => m.DashboardLoginModule)
  },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
