import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { HeroesComponent } from './heroes.component';
import { SharedModule } from '../shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { AddComponent } from './add/add.component'; // <-- import the module
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListComponent, DetailComponent, HeroesComponent, AddComponent],
  imports: [CommonModule,HeroesRoutingModule,SharedModule,NgxPaginationModule,ReactiveFormsModule]
})
export class HeroesModule { }
