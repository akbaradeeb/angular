import { Component, OnInit,Renderer2  } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private renderer: Renderer2,private authService: AuthService,private router: Router) {
    this.renderer.addClass(document.body, 'app');
    this.renderer.addClass(document.body, 'flex-row');
    this.renderer.addClass(document.body, 'align-items-center');
   }

  login() {
     this.authService.login(this.form.value.email,this.form.value.password).subscribe(data=>{
       if(data.status=="success") {
        localStorage.setItem('currentUser',JSON.stringify(data));
        this.router.navigate(['/']);
      }
     });
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'app');
    this.renderer.removeClass(document.body, 'flex-row');
    this.renderer.removeClass(document.body, 'align-items-center');
  }

  ngOnInit() {
    this.form = new FormGroup({
       email: new FormControl('',[Validators.required,Validators.email]),
       password: new FormControl('',Validators.required)
    });
  }

}
