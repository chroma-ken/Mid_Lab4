import { Component } from '@angular/core';
import { TaskServiceService } from '../task-service/task-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.css'
})
export class TaskFilterComponent {

  constructor(public taskService: TaskServiceService){}

  setFilter(filter: 'all' | 'active' | 'completed'){
    this.taskService.setFilter(filter);
  }

  get currentFilter(){
    return this.taskService['currentFilter'];
  }

}
