import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent {
  businesses: Business[] = [
    new Business('Melrose'),
    new Business('Melrose'),
    new Business('Melrose')
  ];

  

}
