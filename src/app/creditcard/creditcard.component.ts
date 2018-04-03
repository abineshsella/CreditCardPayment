import { Component } from "@angular/core";
import { ProcessService } from "../services/process.service";
import { CreditCardDetailsService } from "../services/creditcarddetails.service";
import { TranslateService } from "ng2-translate";
import { Router } from "@angular/router";

@Component({
    selector: 'payment-creditcard',
    providers: [],
    templateUrl: './creditcard.component.html',
    styleUrls: ['./creditcard.component.css']
})
export class CreditCardComponent {

    constructor(private processService: ProcessService, private creditCardDetailsService: CreditCardDetailsService, private translate: TranslateService, private route: Router) {
        processService.update(2);
    }
    GoToSummary(creditCardDetail) {
        if (creditCardDetail.valid){
        debugger;
            alert("Success");
        }
    }
}
