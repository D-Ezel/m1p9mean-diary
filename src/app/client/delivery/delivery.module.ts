import { DeliveryRoutes } from './delivery.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from "@angular/material/sidenav";
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


import { DeliveryComponent } from './delivery.component';
import { MapDeliveryComponent } from './components/map-delivery/map-delivery.component';
import { PointDeliveryComponent } from './components/point-delivery/point-delivery.component';
import { SidebarLeftComponent } from './components/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';



@NgModule({
  declarations: [DeliveryComponent, MapDeliveryComponent, PointDeliveryComponent, SidebarLeftComponent, SidebarRightComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule.forChild(DeliveryRoutes)
  ]
})
export class DeliveryModule { }
