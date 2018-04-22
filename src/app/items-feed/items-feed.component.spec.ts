import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsFeedComponent } from './items-feed.component';

describe('ItemsFeedComponent', () => {
  let component: ItemsFeedComponent;
  let fixture: ComponentFixture<ItemsFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => { 
    fixture = TestBed.createComponent(ItemsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
