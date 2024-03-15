"use server";

import { revalidatePath } from 'next/cache';
import { prisma } from '@/libs/prismadb';
import { error } from 'console';


export const createTodo = async (title: string) => {
    "use server";

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