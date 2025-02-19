
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
    { name: 'Single Line Text', type: 'text' },
    { name: 'Multi Line Text', type: 'textarea' },
    { name: 'Integer', type: 'number' },
    { name: 'Date', type: 'date' },
    { name: 'Time', type: 'time' },
    { name: 'Email', type: 'email' },
  ];

  items: any[] = [];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    } else {
      this.items.splice(event.currentIndex, 0, {
        ...event.previousContainer.data[event.previousIndex],
        id: Date.now(),
        isEditing: false
      });
    }
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
  filteredElements = [...this.textElements]; // Initially, show all elements

  filterElements() {
    if (this.searchQuery.trim() === '') {
      this.filteredElements = [...this.textElements]; // Reset to all elements if no search query
    } else {
      this.filteredElements = this.textElements.filter((element) =>
        element.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

}
