import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboratorComponent } from './colaborator/colaborator.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './cliente/client.component';
import { AuthGuard } from './auth/auth.guard';
import { CompanyDetailsComponent } from './cliente/company-details/company-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'colaborator', component: ColaboratorComponent, canActivate:[AuthGuard] },
  { path: 'client', component: ClientComponent, canActivate:[AuthGuard] },
  { path: 'client/companyDetails', component: CompanyDetailsComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
