import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css']
})
export class ElementListComponent {
  searchQuery: string = '';
  @Input() filteredElements: any[] = [];  // Add
  textElements = [
    { name: 'Single Line Text', type: 'text' },
    { name: 'Multi Line Text', type: 'textarea' },
    { name: 'Integer', type: 'number' },
    { name: 'Date', type: 'date' },
    { name: 'Time', type: 'time' },
    { name: 'Email', type: 'email' },
    { name: 'Dropdown', type: 'dropdown', options: ['Option 1', 'Option 2', 'Option 3'] },
  ];

  constructor() {
    this.filteredElements = [...this.textElements];
  }

  filterElements() {
    this.filteredElements = this.searchQuery.trim()
      ? this.textElements.filter(element =>
          element.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      : [...this.textElements];
  }
}
