import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
    private users: User[] = [
        new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café']),
        new User('John', 'WICK', 'jwick@will.com', 'vodka', ['tuer des gens', 'taper des gens'])
    ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}