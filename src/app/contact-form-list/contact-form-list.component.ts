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
  
  
  ngOnInit() {

    this.info= this.contactInfo.information;
    return this.information = this.contactInfo.information;
  }
  triggerMe() {
    console.log("trigger me !");
  
    this.data =
    console.log(this.data);
  }

  showForm(contact:string){
    console.log(contact)
  }
}
