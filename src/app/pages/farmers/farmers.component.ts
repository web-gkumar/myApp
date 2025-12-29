import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { Data } from '../../shared/services/data';

@Component({
  selector: 'app-farmers',
  imports: [IonicModule, CommonModule],
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.scss'],
})
export class FarmersComponent implements OnInit {

  farmers: any[] = [];
  constructor(private ds: Data) { }
  ngOnInit() { this.farmers = this.ds.getFarmers(); }

}
