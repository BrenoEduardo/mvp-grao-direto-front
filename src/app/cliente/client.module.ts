import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ClientComponent } from './client.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { ClienteShowProductsComponent } from './cliente-show-products/cliente-show-products.component';
import { ScrollableDirective } from '../../core/directives/scrol.directive';



@NgModule({
  declarations: [ClientComponent, CompanyDetailsComponent, ClienteShowProductsComponent, ScrollableDirective],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
  ]
})
export class ClientModule { }
