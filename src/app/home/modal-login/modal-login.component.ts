import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/core/service/login.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss'],
})
export class ModalLoginComponent {
  public loginForm: any;
  public Isregister: boolean = false
  constructor(private fb: FormBuilder, private loginService: LoginService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  register(): void{
    this.Isregister = true
  }
  onSubmit(): void{
    this.loginService.login(this.loginForm.value).subscribe((res: any)=>{
      console.log(res, 'resp')
    })
  }
}
