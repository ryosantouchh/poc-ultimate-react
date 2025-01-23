import { JSX, memo } from "react";

import type { FormMedicalRecordObjectiveProps } from "./types";
import {
  useMedicalRecordDispatch,
  useMedicalRecordObjectiveContext,
} from "@/containers/medical-record/contexts";

// function FormMedicalRecordObjective({
//   data,
//   onObjectiveValueChange,
// }: FormMedicalRecordObjectiveProps) {

function FormMedicalRecordObjective() {
  console.log("FormMedicalRecordObjective -- render");

  const state = useMedicalRecordObjectiveContext();
  const dispatch = useMedicalRecordDispatch()!;

  return (
    <>
      <div>
        <label>Objective Value</label>
        <input
          type="text"
          value={state.value}
          // onChange={(e) => {
          //   onObjectiveValueChange(e.target.value);
          // }}

          onChange={(e) =>
            dispatch({ type: "SET_OBJECTIVE_VALUE", payload: e.target.value })
          }
        />
      </div>
    </>
  );
}

export default memo<(props: FormMedicalRecordObjectiveProps) => JSX.Element>(
  FormMedicalRecordObjective,
  // areEqualProps,
);
//
// function areEqualProps(
//   prevProps: Readonly<FormMedicalRecordObjectiveProps>,
//   newProps: Readonly<FormMedicalRecordObjectiveProps>,
// ) {
//   return prevProps.data === newProps.data;
// }
