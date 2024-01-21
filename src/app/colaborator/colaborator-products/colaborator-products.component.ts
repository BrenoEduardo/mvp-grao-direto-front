import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { jwtDecode } from 'jwt-decode';
import { jwtModel } from 'src/core/interface/jwt.model';
import { ProductsModel } from 'src/core/interface/products.model';
import { ColaboratorService } from 'src/core/service/colaborator/colaborator.service';
import { ColaboratorModalCreateProductComponent } from '../colaborator-modal-create-product/colaborator-modal-create-product.component';

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
  ) {
    this.jwtToken = localStorage.getItem('token')
    this.decoded = jwtDecode(this.jwtToken);
  }
  ngOnInit(): void {
    this.getProductsById()
  }
  getProductsById(){
    this.colaboratorService.getProductsById(this.decoded.id).subscribe((res: any)=>{
      this.products = res.data
      console.log(this.products, 'resp')
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
