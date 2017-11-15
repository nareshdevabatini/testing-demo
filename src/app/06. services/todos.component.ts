import {TodoService} from './todos.service';

export class TodosComponent{
    todos:any[]=[];
    message;
    constructor(private _todoService:TodoService){

    }
    ngOnInit(){
        this._todoService.getTodos().subscribe(data=>this.todos=data)
    }
    addTodo(){
        var newTodo={title:''};
        this._todoService.addTodo(newTodo).subscribe(
            data=>this.todos.push(data),
            err=>this.message=err
        )
    }
    delete(id){
        if(confirm('Are you sure?'))
                this._todoService.delete(id).subscribe(data=>this.todos=data);
    }
}