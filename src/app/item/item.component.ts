import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {
 
  @Input() item: any;
  @Output() onAddItemToCart = new EventEmitter<object>();

  
  constructor() { }

  ngOnInit() {
  } 

  addItemToCart (item) {
    return this.onAddItemToCart.emit(item);
  }

}
