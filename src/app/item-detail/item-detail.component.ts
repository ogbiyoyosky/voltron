import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { ItemService } from '../item.service';
import { Item } from '../../item';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.sass']
})
export class ItemDetailComponent implements OnInit {
  item: Item;
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private itemService: ItemService
  ) {}

  ngOnInit() {
    this.getItem()
  }

  getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
  
    this.itemService.getItem(id)
      .subscribe(item => {
        this.item = item['result'];
      })
      
  }

}