import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-contact-form',
  templateUrl: './create-contact-form.component.html',
  styleUrls: ['./create-contact-form.component.css']
})
export class CreateContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addItem(newItem:string){
    console.log(newItem)
  }
}
