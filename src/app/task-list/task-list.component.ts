import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskServiceService} from '../task-service/task-service.service';
import { FormsModule } from '@angular/forms';
import { TaskFilterComponent } from '../task-filter/task-filter.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskFilterComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  editingTaskId: number | null = null; 
  editedTitle: string = '';
  editedDescription: string = '';

   get tasks() {
    return this.taskService.getFilteredTasks();
  }

  constructor(public taskService: TaskServiceService) {}

  toggleTask(id: number) {
    this.taskService.toggleTasks(id);

}

  deleteTask(id: number){
    this.taskService.deleteTask(id);
  }

  startEditing(task: any) {
    this.editingTaskId = task.id;
    this.editedTitle = task.title;
    this.editedDescription = task.description;
  }

  saveEdit(task: any) {
    if (this.editedTitle.trim()) {
      this.taskService.editTask(task.id, this.editedTitle);
      task.description = this.editedDescription;
      this.editingTaskId = null;
    }
  }

  cancelEdit() {
    this.editingTaskId = null;
  }
  

}
