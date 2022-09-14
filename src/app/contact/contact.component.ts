import { Component, Input, OnInit } from '@angular/core';
import { PhonePipe } from '../phonePipe';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input()
  contact;
 

  constructor() { }

  ngOnInit() {
  }
 

}
