import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboratorComponent } from './colaborator/colaborator.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './cliente/client.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { CompanyDetailsComponent } from './cliente/company-details/company-details.component';
import { ClientGuard } from 'src/core/guard/client.guard';
import { ColaboratorGuard } from 'src/core/guard/colaborators.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'colaborator', component: ColaboratorComponent, canActivate:[AuthGuard, ColaboratorGuard] },
  { path: 'client', component: ClientComponent, canActivate:[AuthGuard, ClientGuard] },
  { path: 'client/companyDetails', component: CompanyDetailsComponent, canActivate:[AuthGuard, ClientGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
