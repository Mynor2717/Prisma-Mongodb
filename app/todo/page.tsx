import { prisma } from '@/libs/prismadb';

import React from 'react'
import FormTodo from './actions/components/form.todo';

const TodoPage = async () => {

  const todos = await prisma.todo.findMany();

  return (
    <div>
      <h1 className='text-center text-3xl my-10'>Todos</h1>
       <FormTodo />
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  )
}

export default TodoPage;