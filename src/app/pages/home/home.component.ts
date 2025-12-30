import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Data } from '../../shared/services/data';
import { searchOutline, callOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, IonicModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  crops: any[] = [];
  constructor(private ds: Data) {
    addIcons({ searchOutline, callOutline });
  }
  ngOnInit() { this.crops = this.ds.getCrops(); }

}
