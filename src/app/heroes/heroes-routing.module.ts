import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent} from './heroes.component';
import { ListComponent }    from './list/list.component';
import { DetailComponent }  from './detail/detail.component';
import { AddComponent} from './add/add.component'

const routes: Routes = [
    {
    	path: "",
    	component: HeroesComponent,
    	children: [
    		{ path: '', component: ListComponent },
    		{ path: 'detail/:id', component: DetailComponent },
        { path: 'add', component: AddComponent }
    	]

    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HeroesRoutingModule { }
