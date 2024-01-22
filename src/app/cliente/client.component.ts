import { UserModel } from 'src/core/interface/companies.model';
import { ClienteService } from '../../core/service/cliente/cliente.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ClienteEditProfileComponent } from './cliente-edit-profile/cliente-edit-profile.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent {
  public companies!: UserModel[];
  private searchTerms = new Subject<any>();
  public loading: boolean = true

  constructor(private ClienteService: ClienteService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllCompanys();
    this.searchTerms.pipe(
      tap(()=>{
        this.loading = true;
        this.companies = [];
      }),
      debounceTime(1000),
      switchMap((term: any) =>{
        return this.ClienteService.filterCompanies(term)
      })
    ).subscribe((res: any) => {
      this.loading = false;
      this.companies = res.data;
    });
  }
  getAllCompanys() {
    this.ClienteService.getAllCompanys().subscribe((res: any) => {
      this.loading = false
      this.companies = res.data;
    });
  }
  openMenu(trigger: MatMenuTrigger): void {
    trigger.openMenu();
  }

  filterCompanies(term:any){
    const payload = {
      'filter':term.target.value
    }
    this.searchTerms.next(payload);
  }

  editarPerfil(): void {
    this.dialog.open(ClienteEditProfileComponent, {
      width:'600px'
    })
  }

  sair(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
  openDetailsCompany(company: UserModel) {
    this.router.navigate(['/client/companyDetails'], { queryParams: company });
  }
}
