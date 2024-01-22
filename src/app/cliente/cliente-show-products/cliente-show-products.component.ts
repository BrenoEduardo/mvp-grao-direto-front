import { Component, Input } from '@angular/core';
import { ProductsModel } from 'src/core/interface/products.model';

@Component({
  selector: 'app-cliente-show-products',
  templateUrl: './cliente-show-products.component.html',
  styleUrls: ['./cliente-show-products.component.scss']
})
export class ClienteShowProductsComponent {

  @Input() products!: ProductsModel[];
  @Input() title!: String;

}
