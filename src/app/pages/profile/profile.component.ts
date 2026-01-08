import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Data } from '../../shared/services/data';
import { addIcons } from 'ionicons';
import { register } from 'swiper/element/bundle';
import { addCircle, addCircleOutline, cameraOutline, caretForwardCircle, closeCircleOutline, pencilOutline } from 'ionicons/icons';


register();
@Component({
  selector: 'app-profile',
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
    addIcons({ pencilOutline, closeCircleOutline, cameraOutline, caretForwardCircle, addCircleOutline });
  }

  ngOnInit() {
    this.crops = this.ds.getCrops();
  }


  toggleEdit() {
    this.isEdit = !this.isEdit;
  }



files: any[] = [];

onFilesSelected(event: any) {
  const selectedFiles: FileList = event.target.files;

  Array.from(selectedFiles).forEach((file: File) => {

    // 🔴 IMAGE
    if (file.type.startsWith('image/')) {
      this.files.push({
        file,
        type: 'image',
        url: URL.createObjectURL(file)
      });
    }

    // 🔴 VIDEO
    else if (file.type.startsWith('video/')) {

      if (file.size > 4 * 1024 * 1024) {
        alert('Video max size 4MB');
        return;
      }

      const video = document.createElement('video');
      video.preload = 'metadata';

      video.onloadedmetadata = () => {
        URL.revokeObjectURL(video.src);
        const duration = video.duration;

        if (duration < 10 || duration > 15) {
          alert('Video must be 10–15 seconds');
          return;
        }

        this.files.push({
          file,
          type: 'video',
          url: URL.createObjectURL(file)
        });
      };

      video.src = URL.createObjectURL(file);
    }
  });

  event.target.value = '';
}

removeFile(index: number) {
  this.files.splice(index, 1);
}


  

}
