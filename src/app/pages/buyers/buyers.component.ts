import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Data } from '../../shared/services/data';

@Component({
  selector: 'app-buyers',
  imports: [IonicModule, CommonModule],
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.scss'],
})
export class BuyersComponent implements OnInit {

  buyers: any[] = [];
  constructor(private ds: Data) { }
  ngOnInit() { this.buyers = this.ds.getBuyers(); }

}
