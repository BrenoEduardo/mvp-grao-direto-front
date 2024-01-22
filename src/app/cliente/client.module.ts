import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ClientComponent } from './client.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { ClienteShowProductsComponent } from './cliente-show-products/cliente-show-products.component';
import { ScrollableDirective } from '../../core/directives/scrol.directive';
import { ClienteEditProfileComponent } from './cliente-edit-profile/cliente-edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ClientComponent, CompanyDetailsComponent, ClienteShowProductsComponent, ScrollableDirective, ClienteEditProfileComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ]
})
export class ClientModule { }
