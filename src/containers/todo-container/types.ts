import type { TodoData } from "@/app/components/form-todo/types";

export interface State {
  todoForm: TodoData;
}

export type Action =
  | {
    type: "SET_TODO_FORM_VALUE";
    payload: string;
  }
  | {
    type: "SET_TODO_FORM_COMPLETED";
    payload: boolean;
  };
