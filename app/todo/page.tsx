import { prisma } from '@/libs/prismadb';
import React from 'react'

const TodoPage = async() => {

  const todos = await prisma.todo.findMany();
 
  

  const createTodo = async () => {
     "use server";
    console.log("server actions")
  }


  return (
    <div>
        <h1 className='text-center text-3xl my-10'>Todos</h1>
        <form action={createTodo}>
          <input type="text" name='title' className='border rounded  border-gray-500 mr-2 p-2'/>
          <button type='submit' className='border rounded border-gray-400 w-28 p-2'>Submit</button>
        </form>
        <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  )
}

export default TodoPage;