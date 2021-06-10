import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 manageCart = new BehaviorSubject<boolean>(false);
 nameUpdater = new BehaviorSubject<string>('');
 itemUpdater = new BehaviorSubject<any>({});
  constructor() { }
}
