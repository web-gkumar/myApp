import { Injectable } from '@angular/core';
import { postlist} from '../models/crop';

@Injectable({
  providedIn: 'root',
})
export class Data {

  crops: postlist[] = [
  {
    "id": 1,
    "category": "vegetables",
    "name": "Gobhi",
    "price": 18,
    "quantity": "20 Quintal",
    "location": "Patna",
    "image": "https://i.pravatar.cc/150"
  },
  {
    "id": 2,
    "category": "fruits",
    "name": "Tamatar",
    "price": 22,
    "quantity": "10 Quintal",
    "location": "Samastipur",
    "image": "https://i.pravatar.cc/150"
  },
  {
    "id": 3,
    "category": "grains",
    "name": "Aalu",
    "price": 18,
    "quantity": "20 Quintal",
    "location": "Muzaffarpur",
    "image": "https://i.pravatar.cc/150"
  },
  {
    "id": 4,
    "category": "Pulses",
    "name": "Muli",
    "price": 22,
    "quantity": "10 Quintal",
    "location": "Darbhanga",
    "image": "https://i.pravatar.cc/150"
  },
  {
    "id": 5,
    "category": "Spices",
    "name": "Gajar",
    "price": 18,
    "quantity": "20 Quintal",
    "location": "Siwan",
    "image": "https://i.pravatar.cc/150"
  },
  {
    "id": 6,
    "category": "vegetables",
    "name": "Mushroom",
    "price": 22,
    "quantity": "10 Quintal",
    "location": "Chapra",
    "image": "https://i.pravatar.cc/150"
  }
];

  getCrops() { return this.crops; }
  getdatabyId(id:any) {
    return this.crops.filter(crop => crop.id === id);
  }

  getCategories() { 
    return [...new Set(this.crops.map(crop => crop.category))];
  }
  getDatabycategory(category:any) {
    return this.crops.filter(crop => crop.category === category);
  }

}
