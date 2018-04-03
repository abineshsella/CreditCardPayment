import { Component, Input, OnInit } from "@angular/core";
import { CreditCardDetailsService } from "../services/creditcarddetails.service";
import { ProcessService } from "../services/process.service";
import { TranslateService } from "ng2-translate";
@Component({
    selector: 'payment-summary',
    providers: [],
    templateUrl: './paymentsummary.component.html',
    styleUrls: ['./paymentsummary.component.css']
})
export class PaymentSummaryComponent{
    creditCardDetails;
    constructor(public creditCardDetailsService: CreditCardDetailsService, public processService: ProcessService,public translate:TranslateService) {
        processService.update(3);
        this.creditCardDetails = creditCardDetailsService.creditCardDetails;
    }
    typeOfCreditCard ="Visa";
}