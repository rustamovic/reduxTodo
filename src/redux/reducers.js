import ToDoInput from '../components/ToDoInput';
import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from './actions';
import {todos} from './states'

export let reducer = (state = todos, actions) =>{
    var newTodos;
    switch(actions.type){
        case ADD_TODO:
            newTodos = [...state];
            newTodos.push(actions.payload);
            return newTodos;
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo=>todo.id!= actions.payload);
            return newTodos; 
        case UPDATE_TODO:
            newTodos = [...state];
            let index = -1;
            for(let i =0; i< newTodos.length; i++){
                index++;
                if(newTodos[i].id==actions.payload.id){
                    break;
                }
            }
            if(index !=-1){
                newTodos[index] = actions.payload
                return newTodos;
            }  
           
    } return state    
}