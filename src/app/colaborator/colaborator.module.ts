import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { ColaboratorComponent } from './colaborator.component';
import { ColaboratorProductsComponent } from './colaborator-products/colaborator-products.component';
import { ColaboratorModalCreateProductComponent } from './colaborator-modal-create-product/colaborator-modal-create-product.component';
@NgModule({
  declarations: [ColaboratorComponent, ColaboratorProductsComponent, ColaboratorModalCreateProductComponent],
  imports: [
    CommonModule,
    NgxMaskModule.forChild(),
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule
  ]
})
export class ColaboratorModule { }
