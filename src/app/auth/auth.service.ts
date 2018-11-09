import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:Http) { }

  login(email:string,password:string){ 
    return this.http.get('/expense/login.php' ).pipe(map(res=>res.json()));
  }
}
