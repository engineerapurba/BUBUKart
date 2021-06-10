import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css'] ,
})
export class ItemdetailsComponent implements OnInit {

  item : any;
  sizes = ['XS','S','M','L','XL'];
  colors = ['red','blue','green'];
  spects = ['Care Instructions: Machine Washli','Fit Type: Regular Fit','Color name: Blue Force/Htr/Green','Material: Synthetic','Pattern: Solid','Round Neck','Machine wash'];
  reviews = ['Good','Not bad','Good as per excepted']
  constructor(private router: Router, private itemService: ItemService, private cartService : CartService) {
    this.item = this.itemService.clickedItem;
   }

  ngOnInit(): void {
  }

  buyNow() {
    this.router.navigateByUrl('/myOrder');
  }

  addToCart(item: any) {
    this.cartService.itemUpdater.next(item);

  }

}
