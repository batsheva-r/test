import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-process-info',
  templateUrl: './process-info.component.html',
  styleUrls: ['./process-info.component.css']
})
export class ProcessInfoComponent implements OnInit {

  @Input()
  insured = {};
  @Input()
  superClaim = { eventDate: '1/1/1900', superClaimType: { code: 0, value: '' }, claimCause: { code: 0, value: '' }, submitionMethod: { code: 0, value: '' }, submitedBy: { code: 0, value: '' }, injuryType: { code: 0, value: '' } };

  @Output() groupIsValid: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() submitedByChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  myForm: FormGroup;
  isClaimCauseChanged = false


  contactTypes = [
    { code: 1, value: 'מבוטח' },
    { code: 2, value: 'סוכן' },
    { code: 3, value: 'בן/בת זוג' },
  ]
  superClaimTypes = [
    { code: 1, value: "התביעה אושרה" },
    { code: 2, value: "התביעה נדחתה" },
    { code: 4, value: "טרם התקבלה החלטה" }
  ]
  claimCauses = [
    { code: 1, value: "תאונה" },
    { code: 2, value: "מחלה" },
    { code: 5, value: "תאונת עבודה" },
    { code: 6, value: "אחר" },
  ]
  injuryTypes = [
    { code: 1, value: "אגן" },
    { code: 2, value: "גפיים" },
    { code: 5, value: "ראש" },
    { code: 6, value: "גב" },
    { code: 7, value: "לב" },
    { code: 9, value: "נפש" },
  ]
  submitionMethods = [
    { code: 1, value: 'דואר' },
    { code: 2, value: 'דיגיטל' },
    { code: 3, value: 'פקס' },
  ]

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.myForm = new FormGroup(
      {
        superClaimType: this.getForm(),
        submitionMethod:this.getForm() ,
        submitedBy: new FormControl(),
        injuryType: this.getForm(),
        claimCause: this.getForm(),
        eventDate: new FormControl(),
      }
    )

    this.myForm.statusChanges.subscribe(() => {
      debugger
      this.groupIsValid.emit(this.myForm.valid);
    });
  }
  private getForm(): FormGroup {
    return this.formBuilder.group({
      code: [],
      value: []
    })
  }
  
  claimCauseChanged() {
    this.isClaimCauseChanged = true;
  }
  chackIfExist() {
     this.submitedByChange.emit(this.myForm.controls.submitedBy.value);
  }
  resetForm() {
    this.myForm.patchValue(this.superClaim); 
    this.myForm.reset;
  }
}
