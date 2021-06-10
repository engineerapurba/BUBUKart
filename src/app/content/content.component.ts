import { Component, Input, EventEmitter,OnInit, Output } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() user = '';
  @Output() outputData = new EventEmitter<string>();
  name = '';
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  }
  buttonClicked(){
    this.outputData.emit('button is clicked');

  }
  addItem(){
    this.cartService.manageCart.next(true);

  }
  removeItem(){
    this.cartService.manageCart.next(false);


  }

  updateName(){
    this.cartService.nameUpdater.next(this.name);


  }


}
