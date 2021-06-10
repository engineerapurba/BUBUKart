import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

 user = 'Apurba' ;
 num = '4' ;
 childData = '';
  constructor() { }

  ngOnInit(): void {
  }
  childDataEmitted(event: string){
    this.user  = event;
  }

}
