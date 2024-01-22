import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { jwtDecode } from 'jwt-decode';
import { jwtModel } from 'src/core/interface/jwt.model';
import { ProductsModel } from 'src/core/interface/products.model';
import { ColaboratorService } from 'src/core/service/colaborator/colaborator.service';

@Component({
  selector: 'app-colaborator-modal-create-product',
  templateUrl: './colaborator-modal-create-product.component.html',
  styleUrls: ['./colaborator-modal-create-product.component.scss']
})
export class ColaboratorModalCreateProductComponent {
  public productsForm: any;
  public jwtToken: any;
  public decoded!: jwtModel;
  public file!: File;
  public products!: ProductsModel[];
  public loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private fireStorage: AngularFireStorage,
    private colaboratorService: ColaboratorService,
    private dialogRef: MatDialogRef<ColaboratorModalCreateProductComponent>
  ) {
    this.jwtToken = localStorage.getItem('token')
    this.decoded = jwtDecode(this.jwtToken);
  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.productsForm = this.fb.group({
      userId: [this.decoded.id],
      productType: ['',[Validators.required]],
      productName: ['', [Validators.required, Validators.minLength(2)]],
      productPrice: [[Validators.required, Validators.minLength(2)]],
      productDescription: ['',[Validators.required, Validators.minLength(2)]],
      productImage: [],
    });
  }

  async onFileChangeImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.file = file;
    }
  }
  async uploadImage(){
    const path = `yt/${this.file.name}`;
    const uploadTask = await this.fireStorage.upload(path, this.file);
    const url = await uploadTask.ref.getDownloadURL();
    this.productsForm.get('productImage').setValue(url);
  }
  async onSubmit(){
    if (this.productsForm.invalid) return;
    this.loading = true;
    if (this.file) await this.uploadImage();
    this.colaboratorService.sendProduct(this.productsForm.value).subscribe((res: any)=>{
      this.productsForm.reset();
      this.dialogRef.close()
      this.loading = false;
    })
  }
}
