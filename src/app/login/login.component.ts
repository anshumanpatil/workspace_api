import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    user:any = {
            user_name: '',
            user_password: ''
    }
  constructor(private __userService:UserService, private __router:Router) { }

  ngOnInit() {
      
  }
  onLoginSubmit(signinForm){
      this.__userService.login(this.user)
      .subscribe((res:any)=>{
          if(res.success){
              console.log(res);
              this.__userService.user = res.user;
              this.__router.navigate(['/dashboard']);
          }
      }, (error)=>{
          alert("UserNAme - demo & Password - demo")
      })
  }
}
