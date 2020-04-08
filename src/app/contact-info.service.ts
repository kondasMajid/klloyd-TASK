import { Injectable } from '@angular/core';
// import { Contact } from './model';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {
  data: any[];
  constructor() { }
  
  
    information = [
    {
      name: "lamar",
      email: "lamar@gmail.com",
      phone: "023232349403",
      country: "USA",
    },
    {
      name: "John doe",
      email: "johndoe@gmail.com",
      phone: "023232349403",
      country: "Ghana",
    },
    {
      name: "sam doe",
      email: "sam@gmail.com",
      phone: "032322349403",
      country: "Ghana",
    },
    {
      name: "dan doe",
      email: "dan@gmail.com",
      phone: "023232349403",
      country: "China",
    },
    {
      name: "anne drick",
      email: "anne@gmail.com",
      phone: "023232349403",
      country: "UK",
    },
    {
      name: "Vals",
      email: "vals@gmail.com",
      phone: "023232349403",
      country: "Singapore",
    },
    {
      name: "daniel crunch",
      email: "daniel@gmail.com",
      phone: "023232349403",
      country: "Ghana",
    },
    {
      name: "bevelo",
      email: "bevelo@gmail.com",
      phone: "023232349403",
      country: "Ghana",
    },
    {
      name: "andreas",
      email: "andreas@gmail.com",
      phone: "023232349403",
      country: "Ghana",
    },
    {
      name: "mavis",
      email: "mavis@gmail.com",
      phone: "023232349403",
      country: "London",
    },
    
    
  ];
 

  triggerMe() {
    console.log("trigger me !");
    this.data = this.information;
    console.log(this.data);
  }

  // showForm(contact:string){
  //   console.log(contact)
  // }
}
