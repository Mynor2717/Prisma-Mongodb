"use client";

import toast from "react-hot-toast";

import { useRef } from "react";
import { createTodo } from "../todo.actions";
import ButtomForm from "./buttom-form.todo";
import { TodoSchemaZod } from "../../schema/todo.zod.schema";

const FormTodo = () => {

    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = async (data: FormData) => {

        const title = data.get("title") as string;

        if (!title || !title.trim()) {
            return toast.error("title es requerido");
        }

        TodoSchemaZod.parse({title});

        const res = await createTodo(title);

        if (res.error) {
            return toast.error(res?.error);
        }


        formRef.current?.reset();

        toast.success("Todo creado");
    }

    return (
        <form ref={formRef}
            action={handleSubmit}
            className="flex">
            <input
                type="text"
                name='title'
                className='border rounded  border-gray-500 mr-2 p-2 w-full' />
            <ButtomForm />
        </form>
    )
}

export default FormTodo;