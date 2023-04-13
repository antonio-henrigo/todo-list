import { Component } from '@angular/core';
import { Todo } from './models/todo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title: String = 'Lista de Tarefas';
  public subtitle: String = 'simples, rápido e fácil.'

  public todos: Todo[] = [];
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      title: ['',Validators.compose([
        Validators.minLength(12),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  add(){
    const title = this.form.controls['title'].value;
    const id = this.todos.length +1;
    this.todos.push(new Todo(id, title, false));
    this.clear();
  }

  clear(){
    this.form.reset()
  }

  removeTask(todo: Todo){
    const index = this.todos.indexOf(todo);
    if(index !== -1){
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo){
    todo.done = true;
  }

}
