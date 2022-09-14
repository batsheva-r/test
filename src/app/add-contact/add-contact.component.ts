import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { versions } from 'process';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  @Output()
  onNewContactAdded: EventEmitter<any> = new EventEmitter();

  
  contactTypes = [
    { code: 1, value: 'מבוטח' },
    { code: 2, value: 'סוכן' },
    { code: 3, value: 'בן/בת זוג' },
  ]
  myForm: FormGroup;
  emailRegex = new RegExp(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)
 

  newContact = { type: { code: 0, value: '' }, deliveryFlag: false }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = new FormGroup(
      {
        deliveryFlag: new FormControl(''),
        name: new FormControl(''),
        // type: new FormControl(''),
        type: this.getForm(),
        phoneNumber: new FormControl(''),
        address: new FormControl(''),
        email: new FormControl('',[Validators.pattern(this.emailRegex)])      }
    )
  }
    
  private getForm(): FormGroup {
    return this.formBuilder.group({
      code: [],
      value: []
    })
  }

  
  refreshTheForm(){
    this.myForm.reset;

  }
  addNewContact() {
    if (this.myForm.valid) {
       let value = this.contactTypes.find(item=> item.code == this.myForm.controls.type.get('code').value).value;
       this.myForm.controls.type.get('value').setValue(value); 
      this.onNewContactAdded.emit(this.myForm.getRawValue());
      this.myForm.reset;

    }
    else {
      Object.keys(this.myForm.controls).forEach(key => {
        if (!this.myForm.get(key).dirty)
          this.myForm.get(key).markAsDirty();
      })
    }
  }
}
