import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import {MatSidenavModule} from "@angular/material/sidenav";
import { RouterModule } from '@angular/router';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';

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
    CarouselModule,
    ButtonModule,
    MatExpansionModule,
    ToastModule,
    MatSlideToggleModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    RouterModule
  ],
})
export class RestoEkalyModule { }
