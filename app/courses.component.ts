import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
  selector: 'courses',
  template: `
    <h1>Hello My Friend!</h1>
    {{title}}
    <input type="text" autoGrow />
    <p>My name is {{name}}, I'm {{age}} years old.</p>
    <ul>
      <li *ngFor="#course of courses">{{course}}</li>
    </ul>
  `,
  providers: [CourseService],
  directives: [AutoGrowDirective]
})
export class CoursesComponent {
  title = "The title of courses page";
  name = "Ryan Jones";
  age = "22";
  courses;

  constructor(courseService : CourseService) {
    this.courses = courseService.getCourses();
  }

}
