import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items = [
    {
    src : '../../assets/images/Books.jpg', 
    name : 'Books:',
    desc : 'Books give plenty of joy to students, and they learn a lot of things from books.',
    oldPrice : 'Rs 899',
    newPrice : 'Rs 599',
    title    : 'My First Paw Pups Learning Library: Boxset of 10',
    Brand    : 'Books'
  },
    { 
    src: '../../assets/images/Clothes.jpg' ,
    name : 'Clothes:',
    desc : 'Clothing is important because it reflects an individuals culture.',
    oldPrice : 'Rs 1599', 
    newPrice : 'Rs 1399',
    title    : 'AWG ALL WEATHER GEAR Mens Polyester',
    Brand    : 'All Brands are available'
  },
    { 
    src: '../../assets/images/Appliances.jpg' ,
    name : 'Appliances:', 
    desc : ' Most modern homes are filled with all manner of appliances.', 
    oldPrice : 'Rs 1999',
    newPrice : 'Rs 1599',
    title    : 'Midea 7 kg Fully Automatic Front Load Washing Machine ',
    Brand    : 'All Brands are available'
    
  },
    { 
    src : '../../assets/images/Laptop.jpg' ,
    name : 'Laptop:',
    desc: 'Today, laptops are the used in a variety of settings.',
    oldPrice : 'Rs 39999', 
    newPrice : 'Rs 32999',
    title    : 'Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 14" FHD IPS ',
    Brand    : 'All Brands are available'

  },
    { 
    src: '../../assets/images/mixer.jpg' , 
    name : 'Mixer:', 
    desc : 'Stand mixers are used for mixing, mashing, whipping.', 
    oldPrice : 'Rs 2999', 
    newPrice : 'Rs 2599',
    title    : 'Pigeon Lavio 2 Litre Table Top Wet Grinder Machine',
    Brand    : 'All Brands are available'
  },
    {
    src: '../../assets/images/Mobile.jpg' ,
    name : 'Mobiles:',
    desc : 'Mobile phones are comfortable .', 
    oldPrice : 'Rs 15999',  
    newPrice: 'Rs 13999',
    title   : 'Samsung Galaxy M51 Electric Blue, 6GB RAM, 128GB Storage',
    Brand    : 'All Brands are available'
  },

  ];
  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit(): void { }

  gridClicked(item : any) {
    console.log(item);
    this.itemService.clickedItem = item;
    this.router.navigateByUrl('/itemsdetails' , {skipLocationChange:true})

  }
}
