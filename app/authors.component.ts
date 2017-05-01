import {Component} from 'angular2/core'
import {AuthorsService} from './authors.service'

@Component({
  selector: 'authors',
  template: `
    <h3>Authors</h3>
    {{title}}
    <ul>
      <li *ngFor="#author of authors">{{author}}</li>
    </ul>
  `,
  providers: [AuthorsService]
})

export class AuthorsComponent {
  title = "My Hood Fam"
  authors;

  // dependency injection (our service is our raw java class)
  constructor(authorsService : AuthorsService) {
    this.authors = authorsService.getAuthors();
  }
}
