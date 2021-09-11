import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contact } from './../home/models/contact';
import { HomeService } from '../home/services/home.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isAddEdit = false;
  editedId: number | any = null;
  contactDetails: Contact[] = [];
  submitted = false;

  contactForm: FormGroup | any;;
  constructor(private homeService: HomeService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setContactForm();
    this.homeService.getContactDetails().subscribe(contacts => {
      this.contactDetails = contacts;
    })
  }

  private setContactForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onDelete(contact: Contact) {
    this.contactDetails = this.contactDetails.filter(_contact => _contact.id !== contact.id);
  }

  onAdd() {
    this.contactForm = null;
    this.setContactForm();
    this.isAddEdit = true;
    this.editedId = null;
    this.contactForm.setValue({
      name: '',
      country: '',
      phone: ''
    })
  }

  onEdit(contact: Contact) {
    this.editedId = contact.id;
    this.isAddEdit = true;
    const { id, ...rest } = contact;
    this.contactForm.setValue(rest);
  }

  onSave() {
    const savedData = this.contactForm.value;
    this.submitted = true;

    if (!this.contactForm.valid) {
      return;
    }

    if (this.editedId !== null) {
      this.contactDetails.some((contact, index) => {
        if (contact?.id === this.editedId) {
          contact = { ...contact, ...savedData };
          this.contactDetails[index] = contact;
          return true;
        }
        return false;
      })
    } else {
      savedData['id'] = this.contactDetails.length + 1;
      this.contactDetails.push(savedData);
    }
    this.onCancel();
  }

  onCancel() {
    this.isAddEdit = false;
    this.editedId = null;
  }

}
