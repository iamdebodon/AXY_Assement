import { Company } from '../models/company';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getCompanyDetails() {
    return this.httpClient.get<Company[]>(`${environment.apiEndPoint}/companies`);
  }

  getContactDetails() {
    return this.httpClient.get<Contact[]>(`${environment.apiEndPoint}/contacts`);
  }
}
