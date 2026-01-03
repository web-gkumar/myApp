import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Data } from '../../shared/services/data';
import { addIcons } from 'ionicons';
import { cameraOutline, closeCircleOutline, pencilOutline } from 'ionicons/icons';



@Component({
  selector: 'app-profile',
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {


  activeTab = 'orders';
  isEdit = false;
  crops: any[] = [];

  user = {
    name: 'Jsessica Simpson',
    mobile: '9876543210',
    email: 'gfx.partner@gmail.com',
    address: '221B Baker Street',
    location: 'New York',
    country: 'USA',
    about: 'Regular grocery user'
  };

  

  constructor(private ds: Data) {
    addIcons({ pencilOutline, closeCircleOutline, cameraOutline });
  }

  ngOnInit() {
    this.crops = this.ds.getCrops();
  }


  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}
