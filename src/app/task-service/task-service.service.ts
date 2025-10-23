  import { Injectable } from '@angular/core';
  import { Task } from './task';
  
  @Injectable({
    providedIn: 'root'
  })
  export class TaskServiceService {
    private Tasks: Task [] = []

    private currentFilter: 'all' | 'active' | 'completed' = 'all';

    getTasks(){
      return this.Tasks;
    }

    addTasks (title: string){
      this.Tasks.push (
        {id: Date.now(), title: title, completed: false,
          createdAt: new Date(), description: ''
        }
      );
    }

    toggleTasks (id: number) {
      const task = this.Tasks.find (t => t.id == id);
      if (task) {
        task.completed = !task.completed;
      }
    }
    getTotalTasks () {
      return this.Tasks.length;
    }
    
    deleteTask(id:number){
      this.Tasks = this.Tasks.filter(t => t.id !== id);
    }

    getCompletedTasks(){
      return this.Tasks.filter(t => t.completed).length;
    }

    getRemainingTasks(){
      return this.Tasks.filter(t => !t.completed).length;
    }

  editTask(id: number, newTitle?: string, newDescription?: string): void {
  const task = this.Tasks.find(t => t.id === id);
  if (task) {
    if (newTitle !== undefined) task.title = newTitle;
    if (newDescription !== undefined) task.description = newDescription;
  }
}


    setFilter(filter: 'all' | 'active' | 'completed'): void {
      this.currentFilter = filter;
    }

    getFilteredTasks() {
      if (this.currentFilter === 'active') {
        return this.Tasks.filter(t => !t.completed);
      } else if (this.currentFilter === 'completed') {
        return this.Tasks.filter(t => t.completed);
      } else {
        return this.Tasks;
      }
    }

    

  }
