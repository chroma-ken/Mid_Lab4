import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskServiceService } from '../task-service/task-service.service';
@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  taskTitle = '';
  
  constructor(private taskService: TaskServiceService) {}

  addTask() {
    if(this.taskTitle.trim()) {
      this.taskService.addTasks(this.taskTitle);
      this.taskTitle = '';

    }
  }

}
