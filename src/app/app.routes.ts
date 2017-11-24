import { HomeComponent } from './0000. Integration/home/home.component';
import { TodosComponent } from './0000. Integration/2-todos/todos.component';
import { UsersComponent } from './0000. Integration/users/users.component'; 
import { UserDetailsComponent } from './0000. Integration/3-user-details/user-details.component';

export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', component: HomeComponent },
];