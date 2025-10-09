import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private Tasks: {id: number, title: string, completed: boolean} [] = []

  getTasks(){
    return this.Tasks;
  }

  addTasks (title: string){
    this.Tasks.push (
      {id: Date.now(), title: title, completed: false}
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

}
