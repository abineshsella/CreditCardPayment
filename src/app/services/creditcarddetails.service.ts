import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject"
import { Subject } from "rxjs/Subject";
import { CreditCardDetails } from "../common/CreditCardDetails";

@Injectable()
export class CreditCardDetailsService {    
    creditCardDetails;
    constructor(){
        this.creditCardDetails =new CreditCardDetails();
    }
     // creditCardDetails= { 'CreditCardNumber': '', 'CVV': '', 'ExpiryMonth': '', 'ExpiryYear': '', 'Nameoncard': '', 'EMailAddress': '' };
}