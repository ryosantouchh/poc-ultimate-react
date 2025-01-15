"use client";

import { useReducer } from "react";

import FormTodo from "@/app/components/form-todo/FormTodo";
import reducer from "./reducer";
import { initialTodoFormState } from "./state";

import type { FormEvent } from "react";
import type { Action } from "./types";

export default function TodoContainer() {
  const [state, dispatch] = useReducer(reducer, initialTodoFormState);

  function eventHandler(type: string) {
    return function (payload: unknown) {
      dispatch({ type, payload } as Action);
    };
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormTodo
          data={state.todoForm}
          onTodoValueChange={eventHandler("SET_TODO_FORM_VALUE")}
          onTodoCompletedChange={eventHandler("SET_TODO_FORM_COMPLETED")}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
