import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Tableau de bord",
    icon: "icon-chart-bar-32",
    class: ""
  },
  {
    path: "/icons",
    title: "Commandes",
    icon: "icon-notes",
    class: ""
  },
  {
    path: "/maps",
    title: "Livreurs",
    icon: "icon-delivery-fast",
    class: "" },
  {
    path: "/notifications",
    title: "Restaurants",
    icon: "icon-shape-star",
    class: ""
  },

  {
    path: "/user",
    title: "Plats à livrer",
    icon: "icon-square-pin",
    class: ""
  },
  {
    path: "/tables",
    title: "table design",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/typography",
    title: "Typography",
    icon: "icon-align-center",
    class: ""
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
