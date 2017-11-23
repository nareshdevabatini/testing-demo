import {TodosComponent} from './todos.component';
import {TodoService} from './todos.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent',()=>{
    let component:TodosComponent;
    let service:TodoService;
    beforeEach(()=>{
        service=new TodoService(null);
        component=new TodosComponent(service);
    })
    it('should set todos property with the items returned from server',()=>{
        let todos=[1,2,3];
        spyOn(service,'getTodos').and.callFake(()=>{
            return Observable.from([todos])
        });

        component.ngOnInit();
        
        //expect(component.todos.length).toBeGreaterThan(1);
        expect(component.todos).toBe(todos);
    })

    it('should call the server to save changes when new todo item is added',()=>{
        let spy=spyOn(service,'addTodo').and.callFake(t=>{
            return Observable.empty();
        })

        component.addTodo();

        expect(spy).toHaveBeenCalled();
    });

    it('should add new todo returned from the server',()=>{
        let todo={id:1}
        let spy=spyOn(service,'addTodo').and.returnValue(Observable.from([todo]));
        
        // let spy=spyOn(service,'addTodo').and.callFake(t=>{
        //     return Observable.from([todo]);
        // })

        component.addTodo();
        
        expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
    });

    it('should set message property if server returns an error when adding new todo',()=>{
        let error="error from server"
        let spy=spyOn(service,'addTodo').and.returnValue(Observable.throw(error));
        
        component.addTodo();
       
        expect(component.message).toBe(error);
    });

    it('should NOT call the server to delete a todo item if the user cancels',()=>{
        spyOn(window,'confirm').and.returnValue(false);
        let spy = spyOn(service,'delete').and.returnValue(Observable.empty());

        component.delete(1);

        expect(spy).not.toHaveBeenCalledWith(1);
    });
})