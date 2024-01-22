import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/core/interface/companies.model';
import { ProductsModel } from 'src/core/interface/products.model';
import { ColaboratorService } from 'src/core/service/colaborator/colaborator.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
})
export class CompanyDetailsComponent {
  public company!: UserModel;
  public productDrink: ProductsModel[] = [];
  public productFood: ProductsModel[] = [];
  public loading: boolean = true
  constructor(
    private router: ActivatedRoute,
    private colaboratorService: ColaboratorService
  ) {
    this.router.queryParams.subscribe((params) => {
      this.company = params as UserModel;
    });
  }

  ngOnInit(): void {
    this.getProductById();
  }
  getProductById() {
    this.colaboratorService
      .getProductsById(this.company._id)
      .subscribe((res: any) => {
        this.loading = false
        res.data.forEach((product: ProductsModel)=>{
          product.productType == 'Bebida' ? this.productDrink.push(product) : this.productFood.push(product)
        })
      });
  }
}
