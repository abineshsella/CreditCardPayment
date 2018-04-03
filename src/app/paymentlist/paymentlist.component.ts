import { Component } from "@angular/core";
import { ProcessService } from "../services/process.service";

@Component({
    selector: 'payment-list',
    providers: [],
    templateUrl: './paymentlist.component.html',
    styleUrls: ['./paymentlist.component.css']

}) export class PaymentListComponent {
    constructor(private processService: ProcessService) {
        processService.update(1);
    }
    creditCard=true;
    imageCollectionInCreditCard = [
        { 'Name': 'VISA', 'Path': '../assets/Visa.svg' ,'New':'No' },
        { 'Name': 'MAESTRO SECURECODE', 'Path': '../assets/Maestro.svg','New':'No' },
        { 'Name': 'Mastercard', 'Path': '../assets/Mastercard.svg' ,'New':'No'}
    ];
    imageCollectionOtherPaymentMethod = [
        { 'Name': 'Alipay', 'Path': '../assets/Alipay.svg' ,'New':'Yes'},
        { 'Name': 'QIWI', 'Path': '../assets/QIWI_wallet.svg' ,'New':'Yes'},
        { 'Name': 'Ideal', 'Path': '../assets/ideal.svg' ,'New':'No'},
        { 'Name': 'SofortBanking', 'Path': '../assets/sofort_banking.svg','New':'No' },
        { 'Name': 'Paypal', 'Path': '../assets/paypal_mlogo.svg' ,'New':'No'},
        { 'Name': 'MasterPass', 'Path': '../assets/img_masterPass.png' ,'New':'No'},
    ]

}