import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyModel } from 'src/core/interface/companies.model';
import { ProductsModel } from 'src/core/interface/products.model';
import { ColaboratorService } from 'src/core/service/colaborator/colaborator.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
})
export class CompanyDetailsComponent {
  public company!: CompanyModel;
  public productDrink: ProductsModel[] = [];
  public productFood: ProductsModel[] = [];

  constructor(
    private router: ActivatedRoute,
    private colaboratorService: ColaboratorService
  ) {
    this.router.queryParams.subscribe((params) => {
      this.company = params as CompanyModel;
    });
  }

  ngOnInit(): void {
    this.getProductById();
  }
  getProductById() {
    this.colaboratorService
      .getProductsById(this.company._id)
      .subscribe((res: any) => {
        res.data.forEach((product: ProductsModel)=>{
          product.productType == 'Bebida' ? this.productDrink.push(product) : this.productFood.push(product)
        })
      });
  }
}
