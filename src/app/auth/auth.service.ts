import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userIsAuthenticated = true;
  constructor() { }

  get userIsAuthenticated(){
    return this._userIsAuthenticated;
  }

  login(){
    this._userIsAuthenticated = true;
  }
  logout(){
    this._userIsAuthenticated = false;
  }

  onSubmit(form: NgForm){
    console.log(form);
  }
}
