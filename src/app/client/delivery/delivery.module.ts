import { DeliveryRoutes } from './delivery.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from "@angular/material/sidenav";
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


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
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(DeliveryRoutes)
  ]
})
export class DeliveryModule { }
