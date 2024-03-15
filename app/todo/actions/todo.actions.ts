"use server";

import { revalidatePath } from 'next/cache';
import { prisma } from '@/libs/prismadb';
 
 
 export const createTodo = async (title: string) => {
    "use server";

    
    
    await prisma.todo.create({
      data: {
        title,
      },
    });
    revalidatePath('/todo')
  }