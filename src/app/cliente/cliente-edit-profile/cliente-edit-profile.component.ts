import { ClienteService } from './../../../core/service/cliente/cliente.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { jwtDecode } from 'jwt-decode';
import { jwtModel } from 'src/core/interface/jwt.model';

@Component({
  selector: 'app-cliente-edit-profile',
  templateUrl: './cliente-edit-profile.component.html',
  styleUrls: ['./cliente-edit-profile.component.scss'],
})
export class ClienteEditProfileComponent {
  public userForm: any;
  public submitted: boolean = false;
  public error: boolean = false;
  public decoded!: jwtModel;
  public jwtToken!: any;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ClienteEditProfileComponent>,
    private clienteService: ClienteService
  ) {
    this.jwtToken = localStorage.getItem('token');
    this.decoded = jwtDecode(this.jwtToken);
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.userForm = this.fb.group({
      _id: [this.decoded.id],
      email: [this.decoded.email, [Validators.email]],
      name: [this.decoded.name, [Validators.minLength(2)]],
    });
  }
  closedModel(){
    this.dialogRef.close()
  }
  onSubmit() {
    if (this.userForm.invalid) return;

    this.submitted = true;

    this.clienteService
      .editProfile(this.userForm.value)
      .subscribe((res: any) => {
        this.submitted = false;
        this.dialogRef.close();
      });
  }
}
