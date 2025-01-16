import { FormTodoProps } from "./types";

export default function FormTodo({
  data,
  onTodoValueChange,
  onTodoCompletedChange,
}: FormTodoProps) {
  return (
    <>
      <div>
        <label>Todo</label>
        <input
          type="text"
          value={data.value}
          onChange={(e) => {
            onTodoValueChange(e.target.value);
          }}
        />
      </div>

      <div>
        <label>Status</label>
        <input
          type="checkbox"
          checked={data.completed}
          onChange={(e) => onTodoCompletedChange(e.target.checked)}
        />
      </div>
    </>
  );
}
