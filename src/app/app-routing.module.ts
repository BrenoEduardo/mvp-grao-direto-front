import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboratorComponent } from './colaborator/colaborator.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'colaborator', component: ColaboratorComponent, canActivate:[AuthGuard] },
  { path: 'client', component: ClientComponent, canActivate:[AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
