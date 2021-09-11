import { Component, OnInit } from '@angular/core';

import { Company } from './models/company';
import { Contact } from './models/contact';
import { HomeService } from './services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  companiesDetail: Company[] | any;
  contacts: Contact[] = [];
  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.homeService.getCompanyDetails().subscribe(companies => {
      this.companiesDetail = companies;
    })
  }

  contactPersons() {
    this.router.navigate(['contact']);
  }

}
