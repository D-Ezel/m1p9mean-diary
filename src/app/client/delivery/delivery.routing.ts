import { PointDeliveryComponent } from './components/point-delivery/point-delivery.component';
import { MapDeliveryComponent } from './components/map-delivery/map-delivery.component';
import { Routes } from "@angular/router";

// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const DeliveryRoutes: Routes = [
  { path: "map-delivery", component: MapDeliveryComponent },
  { path: "point-delivery", component: PointDeliveryComponent },
];
