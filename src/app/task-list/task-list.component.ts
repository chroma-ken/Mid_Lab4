import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskServiceService } from '../task-service/task-service.service';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
   tasks: any[] = [];

  constructor(private taskService: TaskServiceService) {}

  ngDoCheck() {
    this.tasks = this.taskService.getTasks();
  }

  toggleTask(id: number) {
    this.taskService.toggleTasks(id);

}

  deleteTask(id: number){
    this.taskService.deleteTask(id);
  }

}
