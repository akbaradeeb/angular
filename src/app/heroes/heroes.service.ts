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
}
