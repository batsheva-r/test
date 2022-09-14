import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactsComponent } from '../contacts/contacts.component';
import { IProcess } from '../IProcess';
import { ProcessInfoComponent } from '../process-info/process-info.component';
import { ProcessService } from '../processService'

@Component({
  selector: 'app-main-process',
  providers: [],
  templateUrl: './main-process.component.html',
  styleUrls: ['./main-process.component.css']
})
export class MainProcessComponent implements OnInit {

  @ViewChild(ProcessInfoComponent, {static: false}) processInfRef: ProcessInfoComponent;
  @ViewChild(ContactsComponent, {static: false}) contactsRef: ContactsComponent;

  mainProcess={contactPersons:[{type:{value:'',code:0},deliveryFlag:false}],insured:{address:{streetName:'',cityName:''},firstName:'',lastName:'',identity:0},superClaim:{superClaimNum:0}};

  numContacts = 0;
  infoIsValid=false;
  submitedByValid=false;
  contactsValid=false;

  constructor(private processService: ProcessService) {
}
  ngOnInit() {
    this.processService.mainProcess$.subscribe(data => {
      this.mainProcess = data;
      this.numContacts = this.mainProcess.contactPersons.length;
      let value = this.mainProcess.contactPersons.find(item=> item.deliveryFlag == true);
      if(!value)
        this.contactsValid=false
        else
        this.contactsValid=true
    });
  }
  contactAdded(){
    this.numContacts+=1;
  }
  refreshProcess() {
    this.processInfRef.resetForm();
    this.contactsRef.refreshForm();
  }
  continue() {
    this.processService.printProcess();
  }
  addInsured() {
   let newInsured={
    id: 0,
    deliveryFlag: false,
    type: {
        code: 2,
        value: 'מבוטח'
    },
    name:this.mainProcess.insured.firstName+" "+ this.mainProcess.insured.lastName,
    phoneNumber: '',
    email: '',
    address: this.mainProcess.insured.address.streetName+" "+ this.mainProcess.insured.address.cityName
    }
    this.contactsRef.newContactAdded(newInsured);
  }
  contactsReset() {
    this.processService.deletePrimitivContacts();
   this.numContacts=this.mainProcess.contactPersons.length;
    }
  fullReset() {
    this.processService.deleteAllContacts();
    this.numContacts=0;
  }
  onChildComponentEvent(value: boolean) {
    this.infoIsValid = value;
  }
  submitedByChanged(submitedBy){

    let value = this.mainProcess.contactPersons.find(item=> item.type.code == submitedBy);

    for(let i=0;i<this.mainProcess.contactPersons.length;i++)
    {
      if (this.mainProcess.contactPersons[i].type.code==submitedBy )
    {
      this.submitedByValid=true;
      return true
    }
    }
      this.submitedByValid=false;
      alert("חייב להיות איש קשר מאותו הסוג");
      }
}
