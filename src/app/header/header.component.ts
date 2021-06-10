import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() user = '';
  itemNum = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.manageCart.asObservable().subscribe(data => {
      console.log(data);
      if(data == true) {
        this.itemNum++;
      } else{
        if(this.itemNum > 0){
        this.itemNum--;
      }

      }
    });

    this.cartService.nameUpdater.asObservable().subscribe(data=> {
      if (data !== ''){
        this.user = data;
      }
    })
  }

}
