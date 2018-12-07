import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http:Http) { }

  getHeroes(p:number){
    return this.http.get('/expense/heroes.php?page='+p ).pipe(map(res=>res.json()));
  }

  getHero(id:any){
    return this.http.get('/expense/hero-detail.php?id='+id ).pipe(map(res=>res.json()));
  }

  addHero(hero:any){
    return this.http.post('/expense/add-hero.php',hero).pipe(map(res=>res.json()));
  }
}
