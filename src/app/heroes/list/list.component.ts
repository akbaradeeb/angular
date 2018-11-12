import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  heroesList: any[];
  p: number = 1;

  constructor(private heroesService: HeroesService){}

  getHeroes(){
    this.heroesService.getHeroes(this.p).subscribe(items=>{
      this.heroesList = items;
      console.log(items);
    });
  }

  pageChanged(p) {
    this.p = p;
    this.getHeroes();
  }
  ngOnInit() {
    this.getHeroes();
  }

}
