import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'zuper-dashboard-ui';
  isSidebarOpen = false;

  textElements = [
    { name: 'Single Line Text', type: 'text', description: 'Single text area' },
    { name: 'Multi Line Text', type: 'textarea', description: 'Multi text area' },
    { name: 'Integer', type: 'number', description: 'Integer type area' },
    { name: 'Date', type: 'date', description: 'Select date from datepicker' },
    { name: 'Time', type: 'time', description: 'Select date from timepicker' },
    { name: 'Media', type: 'file', description: 'Upload documentation files' },
    { name: 'Dropdown', type: 'dropdown', options: ['Option 1', 'Option 2', 'Option 3'], description: 'select options from dropdown' }]

  items: any[] = [];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  editDropdown(item: any) {
    item.isEditing = true;
  }

  addOption(item: any) {
    item.options.push(`Option ${item.options.length + 1}`);
  }

  removeOption(item: any, index: number) {
    item.options.splice(index, 1);
  }


  drop(event: CdkDragDrop<any[]>) {
    this.items.splice(event.currentIndex, 0, {
      ...event.previousContainer.data[event.previousIndex],
      id: Date.now(),
      isEditing: false,
      options: event.previousContainer.data[event.previousIndex].options ?
        [...event.previousContainer.data[event.previousIndex].options] : []
    });
  }


  editHeader(item: any) {
    item.isEditing = true;
  }

  saveHeader(item: any) {
    item.isEditing = false;
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  searchQuery = '';
  filteredElements = [...this.textElements];

  filterElements() {
    if (this.searchQuery.trim() === '') {
      this.filteredElements = [...this.textElements];
    } else {
      this.filteredElements = this.textElements.filter((element) =>
        element.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

}
