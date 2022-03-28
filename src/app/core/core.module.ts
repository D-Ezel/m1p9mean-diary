import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavbarComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
