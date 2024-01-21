import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/core/service/login/login.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
})
export class ModalLoginComponent {
  public loginForm: any;
  public Isregister: boolean = false;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private dialogRef: MatDialogRef<ModalLoginComponent>,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  register(): void {
    this.Isregister = true;
  }
  onSubmit(): void {
    this.loginService.login(this.loginForm.value).subscribe((res: any) => {
      localStorage.setItem('token', res.data)
      const decoded = jwtDecode(res.data);
      this.dialogRef.close();
      this.router.navigate(['/client'], {queryParams: {data:decoded}})

    });
  }
}
