import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { searchOutline, callOutline, cartOutline } from 'ionicons/icons';
import { SearchResultComponent} from '../search-result/search-result.component';
import { CartComponent } from '../cart/cart.component';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-header',
   imports: [IonicModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor() {
    addIcons({ searchOutline, callOutline, cartOutline });
  }

  ngOnInit() {}

}
