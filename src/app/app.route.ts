import { Routes, RouterModule,PreloadAllModules } from "@angular/router";

import { PaymentListComponent } from "./paymentlist/paymentlist.component";
import { CreditCardComponent } from "./creditcard/creditcard.component";
import { PaymentSummaryComponent } from "./paymentsummary/paymentsummary.component";
import { ProcessService } from "./services/process.service";
const appRoute: Routes = [{ path: 'creditcardpayment', component: CreditCardComponent },
{ path: '', component: PaymentListComponent },
{path:'summary',component:PaymentSummaryComponent}
];
export const CONST_STRING = RouterModule.forRoot(appRoute,{preloadingStrategy: PreloadAllModules});
