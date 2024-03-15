import { todo } from "node:test";
import { TodoInterface } from "../interfaces/todo.interface";
import ItemTodo from "./item.todo";

interface ListTodoprops {
    todos: TodoInterface[];
}

const ListTodo = ({todos}: ListTodoprops) => {

    if(!todos.length) return (<div className="text-center text-2xl">No hay tareas</div>)


  return <div>
     {
        todos.map((todo) => (
            <ItemTodo key={todo.id} todo={todo}/>
        ))
     }
  </div>;
   
  
};

export default ListTodo;