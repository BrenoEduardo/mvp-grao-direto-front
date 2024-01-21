import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/core/service/login.service';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { ModalLoginComponent } from '../modal-login/modal-login.component';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public loginForm: any;
  public productCompany: any;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private fireStorage: AngularFireStorage,
    private router: Router,
    private dialogRef: MatDialogRef<ModalLoginComponent>
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.watchTypeAccountChanges();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      typeAccount: ['', [Validators.required]],
      name: ['', [Validators.minLength(10)]],
      nameCompany: ['', [Validators.minLength(3)]],
      logoCompany: ['', [Validators.minLength(3)]],
    });
  }

  watchTypeAccountChanges(): void {
    this.loginForm
      .get('typeAccount')
      .valueChanges.subscribe((typeAccount: string) => {
        const nameCompanyControl = this.loginForm.get('nameCompany');
        const logoCompanyControl = this.loginForm.get('logoCompany');
        const nameClientControl = this.loginForm.get('name');

        if (typeAccount === 'colaborator') {
          nameClientControl.clearValidators();
          nameCompanyControl.setValidators([Validators.required]);
          logoCompanyControl.setValidators([Validators.required]);
        } else if (typeAccount === 'client') {
          nameCompanyControl.clearValidators();
          logoCompanyControl.clearValidators();
          nameClientControl.setValidators([Validators.required]);
        }
        nameClientControl.updateValueAndValidity();
        nameCompanyControl.updateValueAndValidity();
        logoCompanyControl.updateValueAndValidity();
      });
  }
  async onFileChangeImageProduct(event: any) {
    const file = event.target.files[0];
    console.log(file, 'file');
    if (file) {
      const path = `yt/${file.name}`;
      const uploadTask = await this.fireStorage.upload(path, file);
      const url = await uploadTask.ref.getDownloadURL();
      this.productCompany.get('imageProduct').setValue(url);
      console.log(this.loginForm.value);
    }
  }

  async onFileChangeLogo(event: any) {
    const file = event.target.files[0];
    if (file) {
      const path = `yt/${file.name}`;
      const uploadTask = await this.fireStorage.upload(path, file);
      const url = await uploadTask.ref.getDownloadURL();
      this.loginForm.get('logoCompany').setValue(url);
    }
  }

  createProductFormGroup(): any {
    return this.fb.group({
      nameProduct: ['', [Validators.required, Validators.minLength(5)]],
      priceProduct: ['', [Validators.required, Validators.minLength(2)]],
      imageProduct: ['', [Validators.required]],
    });
  }
  onSubmit(): void {
    console.log(this.loginForm);
    if (this.loginForm.invalid) return;
    this.loginService.register(this.loginForm.value).subscribe((res: any) => {
      const decoded = jwtDecode(res.data);
      this.dialogRef.close()
      this.router.navigate(['/colaborator'], {queryParams: {data:decoded}})
    });
  }
}
