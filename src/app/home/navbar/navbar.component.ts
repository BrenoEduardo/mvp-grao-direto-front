import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalLoginComponent } from '../modal-login/modal-login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private dialog: MatDialog){}

  openModalLogin(){
    this.dialog.open(ModalLoginComponent, {
      width:'300px',
      height: '300px'
    })
  }
}
