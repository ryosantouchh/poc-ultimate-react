export interface FormTodoProps {
  data: TodoData;
  onTodoValueChange: (payload: string) => void;
  onTodoCompletedChange: (payload: boolean) => void;
}

export interface TodoData {
  value: string;
  completed: boolean;
}
