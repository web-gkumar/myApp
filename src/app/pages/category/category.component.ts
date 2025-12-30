import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { searchOutline, callOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Data } from 'src/app/shared/services/data';


@Component({
  selector: 'app-category',
  imports: [HeaderComponent, IonicModule, CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent  implements OnInit {

categories: any[] = [];



  constructor(private dataService: Data) {
    addIcons({ searchOutline, callOutline });
  }

  ngOnInit() {
    this.categories = this.dataService.getCategories();
  }
}
