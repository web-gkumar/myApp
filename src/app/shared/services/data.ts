import { Injectable } from '@angular/core';
import { Crop, User } from '../models/crop';

@Injectable({
  providedIn: 'root',
})
export class Data {

  farmers: User[] = [
    { id: 1, role: 'farmer', name: 'Ram Kumar', mobile: '9876543210', location: 'Patna' },
    { id: 2, role: 'farmer', name: 'Shyam Singh', mobile: '9123456789', location: 'Nalanda' }
  ];


  buyers: User[] = [
    { id: 3, role: 'buyer', name: 'Amit Trader', mobile: '9000011111', location: 'Gaya' }
  ];


  crops: Crop[] = [
    { id: 1, name: 'Gobhi', price: 18, quantity: '20 Quintal', location: 'Patna', farmerId: 1 },
    { id: 2, name: 'Tamatar', price: 22, quantity: '10 Quintal', location: 'Nalanda', farmerId: 2 }
  ];


  getCrops() { return this.crops; }
  getFarmers() { return this.farmers; }
  getBuyers() { return this.buyers; }


  addRequirement(data: any) {
    console.log('Uploaded Requirement:', data);
  }

}
