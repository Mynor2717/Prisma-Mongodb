"use client";

import { FaTrash, FaSpinner } from "react-icons/fa";
import { TodoInterface } from "../interfaces/todo.interface";
import { useTransition } from "react";
import { removeTodo } from "../todo.actions";
import toast from "react-hot-toast";

interface ItemTodoProps {
    todo: TodoInterface
}


const ItemTodo = ({todo}: ItemTodoProps) => {

  let [isPending, startTransition] = useTransition()

  const handleClickRemve = async (id: string) => {
    const res = await removeTodo(id);
    if(res.error){
      toast.error(res.error);
    }else {
      toast.success("todo se elimino")

    }
  }

  return (
    <div className="border border-gray-400 rounded mb-2 p-2 flex justify-between items-center">
        <span>{todo.title}</span>
        <button onClick={() => startTransition(() => handleClickRemve(todo.id))}>
          {
            isPending ? (
              <span  className='block animate-spin'>
                  <FaSpinner className='transform rotate-90'/>
              </span>
            ) : (
              <FaTrash/>   
            )}
            
        </button>
    </div>
  )
}

export default ItemTodo;