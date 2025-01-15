"use client";

import MedicalRecord from "@/containers/medical-record/MedicalRecord";
import reducer from "@/containers/medical-record/reducer";
import { initialMedicalRecordState } from "@/containers/medical-record/state";
import { Action } from "@/containers/medical-record/types";
import { FormEvent, useReducer } from "react";

export default function MedicalRecordPage() {
  const [state, dispatch] = useReducer(reducer, initialMedicalRecordState);

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
      <MedicalRecord />
    </div>
  );
}
