import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { CommandesComponent } from "../../pages/commandes/commandes.component";
import { LivreursComponent } from "../../pages/livreurs/livreurs.component";
import { RestaurantsComponent } from "../../pages/restaurants/restaurants.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "commandes", component: CommandesComponent },
  { path: "livreurs", component: LivreursComponent },
  { path: "notifications", component: RestaurantsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  // { path: "rtl", component: RtlComponent }
];
