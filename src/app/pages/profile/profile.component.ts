import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Data } from '../../shared/services/data';
import { Auth } from '../../shared/services/auth';
import { addIcons } from 'ionicons';
import { register } from 'swiper/element/bundle';
import { addCircleOutline, cameraOutline, caretForwardCircle, closeCircleOutline, pencilOutline } from 'ionicons/icons';


register();
@Component({
  selector: 'app-profile',
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileComponent implements OnInit {

  profileForm!: FormGroup;
  user: any;
  activeTab = 'orders';

  // crops: any[] = [];
  // files: any[] = [];




  constructor(
    private _crudService: Data,
    private _auth: Auth,
    private fb: FormBuilder,
  ) {
    addIcons({ pencilOutline, closeCircleOutline, cameraOutline, caretForwardCircle, addCircleOutline });
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userData') || '{}');
    this.profileForm = this.fb.group({
      mobile: [this.user?.mobile || '', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: [this.user?.address || '', Validators.required],
      country: [this.user?.country || '', Validators.required]
    });
  }
  ionViewWillEnter() {
    // this.loadProfile();
  }

  // loadProfile() {
  //   this._auth.getProfile().subscribe(res => {
  //     this.user = res;
  //     localStorage.setItem('profile', JSON.stringify(res));
  //   });
  // }


  submitProfile() {
    if (this.profileForm.invalid) return;
    this._auth.updateProfile(this.profileForm.value).subscribe((res: any) => {
      localStorage.setItem('profile', JSON.stringify(res.user));
      alert('Profile updated successfully');
      this.profileForm.reset()
    });
  }


  // onFilesSelected(event: any) {
  //   const selectedFiles: FileList = event.target.files;

  //   Array.from(selectedFiles).forEach((file: File) => {

  //     // 🔴 IMAGE
  //     if (file.type.startsWith('image/')) {
  //       this.files.push({
  //         file,
  //         type: 'image',
  //         url: URL.createObjectURL(file)
  //       });
  //     }

  //     // 🔴 VIDEO
  //     else if (file.type.startsWith('video/')) {

  //       if (file.size > 4 * 1024 * 1024) {
  //         alert('Video max size 4MB');
  //         return;
  //       }

  //       const video = document.createElement('video');
  //       video.preload = 'metadata';

  //       video.onloadedmetadata = () => {
  //         URL.revokeObjectURL(video.src);
  //         const duration = video.duration;

  //         if (duration < 10 || duration > 15) {
  //           alert('Video must be 10–15 seconds');
  //           return;
  //         }

  //         this.files.push({
  //           file,
  //           type: 'video',
  //           url: URL.createObjectURL(file)
  //         });
  //       };

  //       video.src = URL.createObjectURL(file);
  //     }
  //   });

  //   event.target.value = '';
  // }

  // removeFile(index: number) {
  //   this.files.splice(index, 1);
  // }






}
