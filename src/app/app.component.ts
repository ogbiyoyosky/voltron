import { Component, OnInit } from '@angular/core';
import { AuthService} from './auth.service';
import { CacheService } from './cache.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  authUser:any

  constructor(private cacheService: CacheService, private authService: AuthService ) {
       
  }

ngOnInit() {
  if (this.cacheService.hasItem('user')) {
    const user = this.cacheService.getItem('user')
    this.authService.announceLogin(user);
  }
}
  
}
  