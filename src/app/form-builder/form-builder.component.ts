import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  @Input() items: any[] = [];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.items[event.currentIndex] = {
        ...this.items[event.currentIndex],
        id: Date.now(),
        isEditing: false,
        options: this.items[event.currentIndex].type === 'dropdown' ? ['Option 1', 'Option 2'] : [],
        value: '',
        errors: {}
      };
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


  validateField(item: any, field: string) {
    if (!item.errors) {
      item.errors = {};
    }

    if (!item[field] || item[field].trim() === '') {
      item.errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    } else {
      delete item.errors[field];
    }
  }
}
