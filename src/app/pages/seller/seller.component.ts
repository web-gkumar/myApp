import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { searchOutline, callOutline } from 'ionicons/icons';
import { Data } from '../../shared/services/data';
import { HeaderComponent } from '../header/header.component';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-seller',
  imports: [CommonModule, HeaderComponent, IonicModule],
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss'],
})
export class SellerComponent implements OnInit {

  crops: any[] = [];
  constructor(private ds: Data) {
    addIcons({ searchOutline, callOutline });
  }
  ngOnInit() { this.crops = this.ds.getCrops(); }

}
