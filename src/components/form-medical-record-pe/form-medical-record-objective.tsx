import { JSX, memo } from "react";

import type { FormMedicalRecordObjectiveProps } from "./types";

function FormMedicalRecordObjective({
  data,
  onObjectiveValueChange,
}: FormMedicalRecordObjectiveProps) {
  console.log("FormMedicalRecordObjective -- render");

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

export default memo<(props: FormMedicalRecordObjectiveProps) => JSX.Element>(
  FormMedicalRecordObjective,
  areEqualProps,
);

function areEqualProps(
  prevProps: Readonly<FormMedicalRecordObjectiveProps>,
  newProps: Readonly<FormMedicalRecordObjectiveProps>,
) {
  return prevProps.data === newProps.data;
}
