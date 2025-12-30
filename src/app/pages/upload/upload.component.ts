import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Data } from '../../shared/services/data';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-upload',
  imports: [HeaderComponent, IonicModule, CommonModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent  implements OnInit {

  constructor(private ds: Data) { }
  ngOnInit() {}
  submit() { this.ds.addRequirement({}); alert('Requirement Uploaded (Dummy)'); }

  

}
