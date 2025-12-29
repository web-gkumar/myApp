import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Data } from '../../shared/services/data';

@Component({
  selector: 'app-upload',
  imports: [IonicModule, CommonModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent  implements OnInit {

  constructor(private ds: Data) { }
  ngOnInit() {}
  submit() { this.ds.addRequirement({}); alert('Requirement Uploaded (Dummy)'); }

  

}
