"use client";

import { useRef } from "react";
import { createTodo } from "../todo.actions";
import ButtomForm from "./buttom-form.todo";

const FormTodo = () => {

    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = async (data: FormData) => {

        const title = data.get("title") as string;

        if (!title || !title.trim()) {
            return alert("title is required");
        }

        await createTodo(title)
        formRef.current?.reset();
    }

    return (
        <form ref={formRef} action={handleSubmit} className="flex">
            <input type="text"
                name='title'
                className='border rounded  border-gray-500 mr-2 p-2 w-full' />
          <ButtomForm />
        </form>
    )
}

export default FormTodo;