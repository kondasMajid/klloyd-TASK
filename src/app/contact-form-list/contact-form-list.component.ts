import { ContactInfoService } from './../contact-info.service';
import { Component, OnInit, Input } from "@angular/core";
import { Contact } from '../model';

@Component({
  selector: "contact-form-list",
  templateUrl: "./contact-form-list.component.html",
  styleUrls: ["./contact-form-list.component.css"]
})
export class ContactFormListComponent implements OnInit {
  @Input() name: string;

  items= [];
  data: any;
  information: any[];
  info: { name: string; email: string; phone: string; country: string; }[];
  
  constructor( private contactInfo: ContactInfoService) {}
  
  // information:Array<Contact> = [
  //   {
  //     name: "John doe",
  //     email: "johndoe@gmail.com",
  //     phone: "023232349403",
  //     country: "Ghana",
  //   },
  //   {
  //     name: "sam doe",
  //     email: "sam@gmail.com",
  //     phone: "032322349403",
  //     country: "Ghana",
  //   },
  //   {
  //     name: "dan doe",
  //     email: "dan@gmail.com",
  //     phone: "023232349403",
  //     country: "China",
  //   },
  //   {
  //     name: "anne drick",
  //     email: "anne@gmail.com",
  //     phone: "023232349403",
  //     country: "UK",
  //   },
  //   {
  //     name: "Vals",
  //     email: "vals@gmail.com",
  //     phone: "023232349403",
  //     country: "Singapore",
  //   },
  //   {
  //     name: "daniel crunch",
  //     email: "daniel@gmail.com",
  //     phone: "023232349403",
  //     country: "Ghana",
  //   },
  //   {
  //     name: "bevelo",
  //     email: "bevelo@gmail.com",
  //     phone: "023232349403",
  //     country: "Ghana",
  //   },
  //   {
  //     name: "andreas",
  //     email: "andreas@gmail.com",
  //     phone: "023232349403",
  //     country: "Ghana",
  //   },
  //   {
  //     name: "mavis",
  //     email: "mavis@gmail.com",
  //     phone: "023232349403",
  //     country: "London",
  //   },
  //   {
  //     name: "lamar",
  //     email: "lamar@gmail.com",
  //     phone: "023232349403",
  //     country: "USA",
  //   }
  // ];


  ngOnInit() {

    this.info= this.contactInfo.information;
    return this.information = this.contactInfo.information;
  }
  triggerMe() {
    console.log("trigger me !");
   
    // items =
    // contactInfo = this.information;
    this.data =
    console.log(this.data);
  }

  showForm(contact:string){
    console.log(contact)
  }
}
