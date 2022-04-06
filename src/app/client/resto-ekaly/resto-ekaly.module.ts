import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import {MatSidenavModule} from "@angular/material/sidenav";
import { RouterModule } from '@angular/router';

import { RestoEkalyComponent } from './resto-ekaly.component';
import { RestoTypeComponent } from './components/resto-type/resto-type.component';
import { RestoPopularComponent } from './components/resto-popular/resto-popular.component';
import { RestoSortingComponent } from './components/resto-sorting/resto-sorting.component';
import { RestoOthersComponent } from './components/resto-others/resto-others.component';



@NgModule({
  declarations: [RestoEkalyComponent, RestoTypeComponent, RestoPopularComponent, RestoSortingComponent, RestoOthersComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatSidenavModule,
    RouterModule
  ],
})
export class RestoEkalyModule { }
