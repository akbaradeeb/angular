import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  hero :any[];

  constructor(private heroesService: HeroesService,
              private route: ActivatedRoute,
              private location: Location
             ){}

  ngOnInit() {
    this.getHero();
  }

  getHero(){
    const id = this.route.snapshot.paramMap.get('id');
    this.heroesService.getHero(id).subscribe(item=>{
      this.hero = item;
      console.log(item);
    });
  }
}
