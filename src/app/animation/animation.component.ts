import { Component, OnInit } from '@angular/core';
import {state,trigger,style,animate,transition} from '@angular/animations'
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('openClose',[
      state('open', style ({
        height : '200px',
        opacity : 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style ({
        height : '100px',
        opacity : .5,
        backgroundColor: 'green'
      })),
      transition ('open => closed',  [
        animate('1s')
      ]),
      transition ('closed => open',  [
        animate('0.5s')
    ])
   
    ]),
    trigger('squareRound',[
      state('square', style ({
        height : '200px',
        width  : '200px',
        opacity : 1,
        backgroundColor: 'yellow'
      })),
      state('round', style ({
        height : '100px',
        width  : '200px',
        borderRadius : '50%' ,
        opacity : .5,
        backgroundColor: 'green'
      })),
      transition ('square => round',  [
        animate('1s')
      ]),
      transition ('round => square',  [
        animate('0.5s')
    ])
   
    ])
  ]
})
export class AnimationComponent implements OnInit {
  isOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

}
