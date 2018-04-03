import { Component, OnInit,Input } from "@angular/core";
import { ProcessService } from "../services/process.service";
import { validateConfig } from "@angular/router/src/config";
import { TranslateService } from "ng2-translate";

@Component({
    selector: 'payment-header',
    providers: [],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
}) export class HeaderComponent implements OnInit {
    arrayProcess;
    constructor(public processService: ProcessService,public translate:TranslateService) {
        
    }
    ngOnInit() {
        this.processService.currentMessage.subscribe(response=>this.arrayProcess=new Array(response));
    }
    merchantName = "Fake merchant";
    amount = 0.05;
    currency = 'Euro';

    SetLanguage(LanguageName)
    {
        this.translate.use(LanguageName);
    }
}