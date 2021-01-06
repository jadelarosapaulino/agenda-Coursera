import { contacto } from './../models/contacto.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Input() contact: contacto;

  constructor() { }

  ngOnInit() {
    console.log(this.contact);

  }

}
