import { FaTrash } from "react-icons/fa";
import { TodoInterface } from "../interfaces/todo.interface";

interface ItemTodoProps {
    todo: TodoInterface
}


const ItemTodo = ({todo}: ItemTodoProps) => {
  return (
    <div className="border border-gray-400 rounded mb-2 p-2 flex justify-between items-center">
        <span>{todo.title}</span>
        <button>
            <FaTrash/>
        </button>
    </div>
  )
}

export default ItemTodo;