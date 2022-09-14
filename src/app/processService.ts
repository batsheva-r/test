import { Injectable } from "@angular/core";
import { element } from "protractor";
import { BehaviorSubject } from "rxjs";
import { IProcess } from "./IProcess";

@Injectable()
export class ProcessService {
    process: IProcess;
    public mainProcess$: BehaviorSubject<IProcess> = new BehaviorSubject<IProcess>(null);

    constructor() {

        this.initProcess();
        this.mainProcess$.next(this.process);
    }

    initProcess() {
        this.process = {
            superClaim: {
                superClaimNum: 500040204,
                superClaimStatus: {
                    code: 1,
                    value: "פתוחה"
                },
                superClaimType: {
                    code: null,
                    value: null
                },
                eventDate: null,
                claimCause: {
                    code: null,
                    value: null
                },
                injuryType: {
                    code: null,
                    value: null
                },
                submitedBy: null,
                submitionMethod: {
                    code: null,
                    value: null
                },
            },
            insured: {
                address: {
                    cityName: "הרצליה",
                    streetName: 'אצ"ל'
                },
                identityType: 1,
                age: 30,
                lastName: "כהן",
                identity: 312536945,
                firstName: "אסף",
            },
            contactPersons: [{
                id: 1,
                deliveryFlag: true,
                type: {
                    code: 1,
                    value: "מבוטח",
                },
                name: "ניקיטה ג'ין",
                phoneNumber: 584470958,
                email: "r454w@gmail.com",
                address: "הבנים 15, אשדוד",
            }]
        }
    }


    getProcess() {
        return this.mainProcess$;
    }

    setProcess() {
        this.mainProcess$.next(this.process);
    }

    addNewContact(newContact) {
        newContact.id = this.process.contactPersons.length + 1;
        this.process.contactPersons.push(newContact);
        this.mainProcess$.next(this.process);
    }

    deleteAllContacts() {
        while (this.process.contactPersons.length) {
            this.process.contactPersons.pop();
        }
        this.mainProcess$.next(this.process);
    }

    deletePrimitivContacts() {
        debugger
        for (let i = 0; i < this.process.contactPersons.length;)
            if (!this.process.contactPersons[i].deliveryFlag) {
                this.process.contactPersons.splice(i, 1);
            }
            else
                i++;
        this.mainProcess$.next(this.process);
    }

    printProcess() {
        console.log(JSON.stringify(this.process));
    }
}