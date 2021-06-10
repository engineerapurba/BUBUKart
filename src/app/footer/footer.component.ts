import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() user = '' ;
  @Input() pageNum ='';
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.nameUpdater.asObservable().subscribe(data => {
      if(data !== '') {
      this.user = data;
      }
    })
  }

}
