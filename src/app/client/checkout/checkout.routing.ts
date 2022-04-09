import { BankCardComponent } from './components/content/bank-card/bank-card.component';
import { OperatorsComponent } from './components/content/operators/operators.component';
import { Routes } from "@angular/router";

// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const CheckoutRoutes: Routes = [
  { path: "operators", component: OperatorsComponent },
  { path: "bank-card", component: BankCardComponent },
];
