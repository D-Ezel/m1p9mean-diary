import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';
import { SearchbarTopComponent } from './components/searchbar-top/searchbar-top.component';



@NgModule({
  declarations: [DefaultComponent, SidebarRightComponent, SearchbarTopComponent],
  imports: [
    CommonModule
  ]
})
export class DefaultModule { }
