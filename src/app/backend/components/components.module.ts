import { DashboardComponent } from './../pages/dashboard/dashboard.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FooterAdminComponent } from "./footer-admin/footer-admin.component";
import { NavbarAdminComponent } from "./navbar-admin/navbar-admin.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
  declarations: [FooterAdminComponent, NavbarAdminComponent, SidebarComponent],
  exports: [FooterAdminComponent, NavbarAdminComponent, SidebarComponent]
})
export class ComponentsModule {}
