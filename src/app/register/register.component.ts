import { Component, OnInit, ViewChild  } from '@angular/core';
import { UserService } from '../services/user.service';
import { AgGridNg2 } from 'ag-grid-angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
    user:any = {
            formUsername: '',
            formPassword: '',
            formEmail: ''
    }
  constructor(private __userService:UserService) { }

  ngOnInit() {
      
  }
  onSignupSubmit(signupForm){
      this.__userService.login(this.user);
  }
  
}
