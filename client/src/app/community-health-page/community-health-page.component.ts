import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommunityHealthPageService } from './community-health-page.service';

@Component({
  selector: 'app-community-health-page',
  templateUrl: './community-health-page.component.html',
  styleUrls: ['./community-health-page.component.scss']
})
export class CommunityHealthPageComponent implements OnInit {
  place: string;
  response: any;
  unitAvailable: Number;
  notAvailable: Boolean = false;

  latitude: string;
  longitude: string;

  profileForm = new FormGroup({
    lat: new FormControl(''),
    long: new FormControl(''),
  });
  constructor(private communityhealthpageservice : CommunityHealthPageService ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    
    let lat = this.profileForm.controls.lat.value;
    let long = this.profileForm.controls.long.value;

     lat >= 0 ? this.latitude = '+'+lat.toString() : this.latitude =  lat.toString();

     long >= 0 ? this.longitude = '+'+long.toString() : this.longitude = long.toString();
    
    this.communityhealthpageservice.getName( this.latitude,this.longitude).subscribe(data => {this.response = data ; 
          console.log(this.response.place);
          this.place = this.response.place;
          this.unitAvailable = this.response.totalFeature;

          if(this.response.totalFeature < 1) {
            this.notAvailable = true;
          } else {
            this.notAvailable = false;
          }
        });

   
  }
}
