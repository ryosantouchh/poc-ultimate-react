"use client";

import { useReducer } from "react";

import FormMedicalRecordPE from "@/app/components/form-medical-record-pe/form-medical-record-pe";
import reducer from "./reducer";
import { initialMedicalRecordState } from "./state";

import type { FormEvent } from "react";
import type { Action } from "./types";
import useClearMedicalRecord from "./useClearMedicalRecord";

export default function MedicalRecord() {
  const [state, dispatch] = useReducer(reducer, initialMedicalRecordState);

  // Currying
  function eventHandler(type: string) {
    return function (payload: unknown) {
      dispatch({ type, payload } as Action);
    };
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  useClearMedicalRecord({ dispatch });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormMedicalRecordPE
          data={state.physicalExam}
          // Subjective
          onChiefComplainChange={eventHandler("SET_CHIEF_COMPLAIN")}
          onVitalSignTempChange={eventHandler("SET_VITAL_SIGN_TEMP")}
          onVitalSignHeartRateChange={eventHandler("SET_VITAL_SIGN_HEART_RATE")}
          // Objective
          onObjectiveValueChange={eventHandler("SET_OBJECTIVE_VALUE")}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
