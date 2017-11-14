import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

export class TodoService{
    constructor(private _http:Http){

    }
    addTodo(todo){
        return this._http.post('...',todo).map(r=>r.json());
    }
    getTodos(todo){
        return this._http.get('...',todo).map(r=>r.json());
    }
    delete(id){
        return this._http.delete('..',id).map(r=>r.json());
    }
}