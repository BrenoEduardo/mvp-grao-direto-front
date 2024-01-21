import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { jwtModel } from 'src/core/interface/jwt.model';
import { ProductsModel } from 'src/core/interface/products.model';
import { ColaboratorService } from 'src/core/service/colaborator/colaborator.service';

@Component({
  selector: 'app-colaborator',
  templateUrl: './colaborator.component.html',
  styleUrls: ['./colaborator.component.scss']
})
export class ColaboratorComponent {

}
