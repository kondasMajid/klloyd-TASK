import { ContactInfoService } from './../contact-info.service';
import { ContactFormListComponent } from './../contact-form-list/contact-form-list.component';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Contact } from '../model';
// import {  } from 'protractor';
@Component({
  selector: 'klloyds-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  info:  any;
  klloydForm: FormGroup;
  @Input() btnText: any;
  @Input() contact: Contact;  //adding out put to satisfy the Interface IForm
  @Output() onSave = new EventEmitter<Contact>(); // Add output named onSave which  have a type EventEmitter<Contact>.
  // unSave: Iform 


  @Input('theData') data: Contact
  constructor(private fb: FormBuilder,
     private contactInfo: ContactInfoService) {
    // this.onSave = new EventEmitter<string>()
  }

  get contacts(): FormArray {
    return <FormArray>this.klloydForm.get('contactsArray');
  }

  ngOnInit() {
    this.klloydForm = this.fb.group({
      contactsArray: this.fb.array([])
    });
    this.info = this.contactInfo.information;
    this.info.forEach(contact => {
      this.addContact(contact)
    })
  }


  // Task Two   -  Im using  invoke the form you created in task one .
  //at the end of the day i get all

  // ngOnInit() {
  //     this.klloydForm = this.fb.group({
  //     name: [null, [Validators.required]],
  //     email: [null, [Validators.required]],
  //     phone: [null, [Validators.required]],
  //     country: [null, [Validators.required]]
  //   })

  //   this.info= this.contactInfo.information;
  //   // this.info.push(this.contactInfo.information);
  // }

  // back up onSubmit 

  onSubmit(value: Contact) {
    this.onSave.emit(value)
    console.log('klloyd', this.klloydForm.value);
  }




  ///Updates as at 8th April

 
  addContact(contact: any) {
    this.contacts.push(this.createContactGroup(contact));
  }

  addNewContact() {
    this.addContact({ name: null, email: null, phone: null, country: null});
  }

  createContactGroup(contact: any): FormGroup {
    return this.fb.group({  
      name: [contact.name, [Validators.required]],
      email: [contact.email, [Validators.required]],
      phone: [contact.phone, [Validators.required]],
      country: [contact.country, [Validators.required]]
    })
  } 

}

