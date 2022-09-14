import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-menu-contacts',
  templateUrl: './menu-contacts.component.html',
  styleUrls: ['./menu-contacts.component.css']
})
export class MenuContactsComponent implements OnInit {

  @Input()
  numContacts;

  @Output()
  onAddInsured: EventEmitter<any> = new EventEmitter();

  @Output()
  onContactsReset: EventEmitter<any> = new EventEmitter();

  @Output()
  onFullReset: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateNumContacts() {
    this.numContacts += 1;
  }

  addInsured() {
    debugger
    this.onAddInsured.emit();
  }
  contactsReset() {
    this.onContactsReset.emit();
  }
  fullReset() {
    this.onFullReset.emit();
  }
}
