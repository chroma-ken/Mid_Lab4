import { Component } from '@angular/core';
import { TaskServiceService } from '../task-service/task-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
   constructor(private taskService: TaskServiceService) {}

  get totalTasks() {
    return this.taskService.getTotalTasks();
  }

  get CompletedTask() {
    return this.taskService.getCompletedTasks();
  }

  get RemainingTasks(){
    return this.taskService.getRemainingTasks();
  }

}
