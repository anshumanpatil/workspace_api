import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private __userService:UserService){
        
    }
  canActivate() {
    //always active kept true we can change logic .....
    return this.__userService.canActivate;
  }

  

}