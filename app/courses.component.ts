import {Component} from 'angular2/core'

@Component({
  selector: 'courses',
  template: `
    <h1>Hello My Friend!</h1>
    {{title}}
    <p>My name is {{name}}, I'm {{age}} years old.</p>
    <ul>
      <li *ngFor="#course of courses">{{course}}</li>
    </ul>
  `
})
export class CoursesComponent {
  title = "The title of courses page";
  name = "Ryan Jones";
  age = "22";
  courses = ["Math", "History", "Science"];

}
