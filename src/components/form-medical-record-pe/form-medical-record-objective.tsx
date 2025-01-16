import type { FormMedicalRecordObjectiveProps } from "./types";

export default function FormMedicalRecordObjective({
  data,
  onObjectiveValueChange,
}: FormMedicalRecordObjectiveProps) {
  return (
    <>
      <div>
        <label>Objective Value</label>
        <input
          type="text"
          value={data.value}
          onChange={(e) => {
            onObjectiveValueChange(e.target.value);
          }}
        />
      </div>
    </>
  );
}
