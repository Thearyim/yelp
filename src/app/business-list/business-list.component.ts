import { Component, Input } from '@angular/core';
import { Business } from '../models/task.model';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent {
  @Input() childBusinessList: Business[];
  businesses: Business[] = [
    new Business('Melrose'),
    new Business('Melrose'),
    new Business('Melrose')
  ];



}
