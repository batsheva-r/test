import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { ProcessService } from '../processService';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  @Input()
  contacts = []
  @Output()
  onContactAdded: EventEmitter<string> = new EventEmitter<string>();
  newContFlag: boolean;
  @ViewChild(AddContactComponent, {static: false}) contactRef: AddContactComponent;

  constructor(private processService: ProcessService) {
    this.newContFlag = false;
  }

  ngOnInit() {
  }

  addContact() {
    this.newContFlag = true;
  }
  newContactAdded(newContact) {
    debugger
    this.newContFlag=false;
    this.onContactAdded.emit(newContact);
    this.processService.addNewContact(newContact);
  }
  refreshForm()
  {
    if(this.newContFlag)
    {
      this.contactRef.refreshTheForm();
      this.newContFlag = false;
    }
    
  }

}
