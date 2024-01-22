import { CompanyModel } from 'src/core/interface/companies.model';
import { ClienteService } from '../../core/service/cliente/cliente.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent {
  public companies!: CompanyModel[];
  private searchTerms = new Subject<any>();

  constructor(private ClienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.getAllCompanys();
    this.searchTerms.pipe(
      debounceTime(1000),
      switchMap((term: any) => this.ClienteService.filterCompanies(term))
    ).subscribe((res: any) => {
      this.companies = res.data;
    });
  }
  getAllCompanys() {
    this.ClienteService.getAllCompanys().subscribe((res: any) => {
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

  editarPerfil(): void {}

  sair(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
  openDetailsCompany(company: CompanyModel) {
    this.router.navigate(['/client/companyDetails'], { queryParams: company });
  }
}
