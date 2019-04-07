import { Component } from '@angular/core';
import { Business } from './models/business.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Holler';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedBusiness = null;

  masterBusinessList: Business[] = [
    new Business('Melrose'),
    new Business('Melrose'),
    new Business('Melrose')
  ];

  // editBusiness(clickedBusiness) {
  //   this.selectedBusiness = clickedBusiness;
  // }

  // finishedEditing() {
  //   this.selectedBusiness = null;
  // }

  // addBusiness(newBusiness: Business) {
  //   this.masterBusinessList.push(newBusiness);
  // }
}
