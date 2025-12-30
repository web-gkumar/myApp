import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { searchOutline, callOutline } from 'ionicons/icons';
import { Data } from '../../shared/services/data';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-farmers',
  imports: [HeaderComponent, IonicModule, CommonModule],
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.scss'],
})
export class FarmersComponent implements OnInit {

  crops: any[] = [];
  constructor(private ds: Data) { 
    addIcons({ searchOutline, callOutline });
  }
  ngOnInit() { this.crops = this.ds.getCrops(); }

}
