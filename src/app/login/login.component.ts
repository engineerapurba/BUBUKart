import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit {

  constructor(private router:Router) { }
    userName ='string';
    password = 'string';
    isApurba = false;
  ngOnInit(): void {
  }
 
  loginClicked(){
    this.isApurba = !this.isApurba;
    if(this.userName === 'apurba' && this.password === 'apurba'){
    this.router.navigateByUrl('/items',{skipLocationChange:true});
    }
    else{
      alert('enter correct username and password')
    }
  }
  resetPassword(){
    //alert('Reset your Password')
  } 

  
}
