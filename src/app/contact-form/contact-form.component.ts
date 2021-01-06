import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { contacto } from '../models/contacto.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() contact: contacto;
  @HostBinding('attr.class') cssClass = 'col-md-6';
  contacts: contacto[];

  constructor() {
    this.contacts = [];
   }

  ngOnInit() {
  }

  guardar(n: string, t:string, a: string) : boolean {
    this.contacts.push(new contacto(n, t, a));
    return false;
  }

}
