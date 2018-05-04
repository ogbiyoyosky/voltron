import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.sass']
})
export class ItemDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ItemService
  ) {}

  ngOnInit() {
  }

}
