import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProcessInfoComponent } from './process-info/process-info.component';
import { MenuContactsComponent } from './menu-contacts/menu-contacts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contact/contact.component';
import { MainProcessComponent } from './main-process/main-process.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProcessService } from './processService';
import { AddContactComponent } from './add-contact/add-contact.component';
import { PhonePipe } from './phonePipe';
@NgModule({
  declarations: [
    AppComponent,
    ProcessInfoComponent,
    MenuContactsComponent,
    ContactsComponent,
    ContactComponent,
    MainProcessComponent,
    AddContactComponent,
    PhonePipe
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule
  ],
  providers: [ProcessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
