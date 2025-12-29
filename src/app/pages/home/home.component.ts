import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Data } from '../../shared/services/data';

@Component({
  selector: 'app-home',
  imports: [IonicModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  crops: any[] = [];
  constructor(private ds: Data) { }
  ngOnInit() { this.crops = this.ds.getCrops(); }

}
