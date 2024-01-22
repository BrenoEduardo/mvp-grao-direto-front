import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/core/service/login/login.service';
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
  public mask = [
    '(',
    /[1-9]/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];
  public file!: File;
  public submitted: boolean = false;
  public loading: boolean = false;
  public error: boolean = false;

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
      name: ['', [Validators.required, Validators.minLength(2)]],
      nameCompany: ['', [Validators.required, Validators.minLength(3)]],
      phoneCompany: ['', [Validators.required, Validators.minLength(10)]],
      adressCompany: ['', [Validators.required, Validators.minLength(3)]],
      logoCompany: [],
    });
  }
  closedModel() {
    this.dialogRef.close();
  }
  watchTypeAccountChanges(): void {
    this.loginForm
      .get('typeAccount')
      .valueChanges.subscribe((typeAccount: string) => {
        const nameCompanyControl = this.loginForm.get('nameCompany');
        const nameClientControl = this.loginForm.get('name');
        const phoneCompany = this.loginForm.get('phoneCompany');
        const adressCompany = this.loginForm.get('adressCompany');

        if (typeAccount === 'colaborator') {
          nameClientControl.clearValidators();
          nameCompanyControl.setValidators([Validators.required]);
          adressCompany.setValidators([Validators.required]);
          phoneCompany.setValidators([Validators.required]);
        } else if (typeAccount === 'client') {
          nameCompanyControl.clearValidators();
          phoneCompany.clearValidators();
          adressCompany.clearValidators();
          nameClientControl.setValidators([Validators.required]);
        }
        adressCompany.updateValueAndValidity();
        phoneCompany.updateValueAndValidity();
        nameClientControl.updateValueAndValidity();
        nameCompanyControl.updateValueAndValidity();
      });
  }
  async onFileChangeImageProduct(event: any) {
    const file = event.target.files[0];
    if (file) {
      const path = `yt/${file.name}`;
      const uploadTask = await this.fireStorage.upload(path, file);
      const url = await uploadTask.ref.getDownloadURL();
      this.productCompany.get('imageProduct').setValue(url);
    }
  }

  async onFileChangeLogo(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.file = file;
    }
  }
  async uploadImage() {
    const path = `yt/${this.file.name}`;
    const uploadTask = await this.fireStorage.upload(path, this.file);
    const url = await uploadTask.ref.getDownloadURL();
    this.loginForm.get('logoCompany').setValue(url);
  }
  async onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) return;

    if (this.file) await this.uploadImage();
    this.loading = true;
    this.loginService.register(this.loginForm.value).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.data);
        const decoded: any = jwtDecode(res.data);
        decoded.typeAccount == 'client'
          ? this.router.navigate(['/client'])
          : this.router.navigate(['/colaborator']);
        this.dialogRef.close();
      },
      error: (error: any) => {
        this.loading = false;
        this.error = true;
      },
    });
  }
}
