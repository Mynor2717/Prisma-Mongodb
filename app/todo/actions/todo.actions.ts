"use server";

import { revalidatePath } from 'next/cache';
import { prisma } from '@/libs/prismadb';



export const createTodo = async (title: string) => {
    

    if (!title || !title.trim()) {
        return {
            error: "Title is required (back)",
        };
    }

    try {
        await prisma.todo.create({
            data: {
                title,
            },
        });
        revalidatePath('/todo');
        return{
           success: true,
        };

    } catch (error) {
       return {
        error: "Error al crear el todo (Back)"
       }
    }

}

export  const removeTodo = async(id: string) => {

   if (!id || !id.trim()) {
    return {
        error: "id is require",
    };
   }


    try {
        await prisma.todo.delete({
            where: {
                id,
            },
        });
        revalidatePath("/todo");
        return {
          success: true,
        };
        
    } catch (error) {
        return {
            error: "Error al remover",
        };
    }
}