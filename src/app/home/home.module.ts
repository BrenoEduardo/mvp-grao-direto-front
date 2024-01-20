import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [HomeComponent, NavbarComponent, MainComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports:[
    HomeComponent,
    NavbarComponent,
  ]
})
export class HomeModule { }
