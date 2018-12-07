import { Component, OnInit,Renderer2  } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute} from "@angular/router";
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form:FormGroup;

  constructor(private renderer: Renderer2,private heroesService: HeroesService,private router: Router) { }

  addHero(){
    this.heroesService.addHero(this.form.value).subscribe(data=>{
       if(data.status=="success"){
         this.router.navigate(['heroes']);
       } else {
         alert(data.msg);
       }
    })
  }

  ngOnInit() {
    this.form = new FormGroup({
      local: new FormControl('',[Validators.required]),
      name : new FormControl('',[Validators.required]),
    })
  }

}
