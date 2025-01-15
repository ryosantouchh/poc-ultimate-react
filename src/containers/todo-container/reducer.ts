import type { Action, State } from "./types";

export default function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_TODO_FORM_VALUE":
      return {
        ...state,
        todoForm: {
          ...state.todoForm,
          value: action.payload,
        },
      };

    case "SET_TODO_FORM_COMPLETED":
      return {
        ...state,
        todoForm: {
          ...state.todoForm,
          completed: action.payload,
        },
      };

    default:
      return state;
  }
}
