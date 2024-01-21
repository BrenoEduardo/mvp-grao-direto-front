import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { jwtDecode } from 'jwt-decode';
import { jwtModel } from 'src/core/interface/jwt.model';
import { ProductsModel } from 'src/core/interface/products.model';
import { ColaboratorService } from 'src/core/service/colaborator/colaborator.service';
import { ColaboratorModalCreateProductComponent } from '../colaborator-modal-create-product/colaborator-modal-create-product.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colaborator-products',
  templateUrl: './colaborator-products.component.html',
  styleUrls: ['./colaborator-products.component.scss']
})
export class ColaboratorProductsComponent {

  public productsForm: any;
  public jwtToken: any;
  public products!: ProductsModel[];
  public decoded!: jwtModel;

  constructor(
    private colaboratorService: ColaboratorService,
    private dialog: MatDialog,
    private router: Router,
  ) {
    this.jwtToken = localStorage.getItem('token')
    this.decoded = jwtDecode(this.jwtToken);
  }
  ngOnInit(): void {
    this.getProductsById()
  }
  openMenu(trigger: MatMenuTrigger): void {
    trigger.openMenu();
  }

  editarPerfil(): void {
    // Implemente a lógica para editar o perfil aqui
  }

  sair(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
  getProductsById(){
    this.colaboratorService.getProductsById(this.decoded.id).subscribe((res: any)=>{
      this.products = res.data
    })
  }
  openModalCreateProduct(){
    this.dialog.open(ColaboratorModalCreateProductComponent, {
      width:'300px',
      height: '300px'
    }).afterClosed().subscribe((result: any)=>{
      this.getProductsById()
    })
  }
}
