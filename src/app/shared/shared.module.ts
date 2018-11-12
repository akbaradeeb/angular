import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './include/header/header.component';
import { SidebarComponent } from './include/sidebar/sidebar.component';
import { FooterComponent } from './include/footer/footer.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, SidebarComponent, FooterComponent]
})
export class SharedModule { }
