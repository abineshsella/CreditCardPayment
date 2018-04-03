import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PaymentListComponent } from './paymentlist/paymentlist.component';
import { CONST_STRING } from './app.route'
import { CreditCardComponent } from './creditcard/creditcard.component';
import { ProcessService } from './services/process.service';
import { PaymentSummaryComponent } from './paymentsummary/paymentsummary.component';
import { CreditCardDetailsService } from './services/creditcarddetails.service';
import {TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService} from 'ng2-translate';
import { Http } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaymentListComponent,
    CreditCardComponent,
    PaymentSummaryComponent
  ],
  imports: [
    TranslateModule.forRoot({
      provide:TranslateLoader,
      useFactory:(http:Http)=>new TranslateStaticLoader(http,'assets/i18n','.json'),
      deps:[Http]
    }),
    NgbModule.forRoot(),
    BrowserModule,
    CONST_STRING,
    FormsModule
  ],
  providers: [ProcessService,
    CreditCardDetailsService,
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
