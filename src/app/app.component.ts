import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formHeaders = [
    { name: 'Section Title', type: 'header' ,description : 'add a description' },
    { name: 'Subheading', type: 'subheader' ,description : 'add a description'},
  ];

  textElements = [
    { name: 'Single Line Text', type: 'text', description: ' Single text area' },
    { name: 'Multi Line Text', type: 'textarea', description: ' Multi text area' },
    { name: 'Integer', type: 'number', description: ' Integer type area' },
    { name: 'Date', type: 'date', description: ' Select from datepicker' },
    { name: 'Time', type: 'time', description: 'Select from timepicker' },
    { name: 'Email', type: 'email', description: ' Enter email' },
    { name: 'Dropdown', type: 'dropdown', options: ['Option 1', 'Option 2', 'Option 3'], description: ' Select Option from dropdown' },
  ];

  items: any[] = [];
  searchQuery = '';
  filteredElements = [...this.textElements];
}
