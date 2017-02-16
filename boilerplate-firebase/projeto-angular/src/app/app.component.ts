import { Component, OnInit} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User {
  constructor(public name: string, public email: string, public avatar: string, public gender: number) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  users: Observable<User[]>;
  genders: FirebaseListObservable<any[]>;

  constructor( private af: AngularFire) {
  }

  ngOnInit() {
    this.users = this.af.database.list('/users')
      .map(users => {
        users.map(user => {
          user.sexo = this.af.database.object('/gender/' + user.gender );
        });
        return users;
      }); 
    this.genders = this.af.database.list('/gender');
  }

  addUser() {
    // this.users.push(new User('Dequinho', 'decoporto@gmail.com', 'http://placehold.it/150',1));
  }

}
