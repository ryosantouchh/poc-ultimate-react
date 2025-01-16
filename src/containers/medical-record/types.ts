import type { MedicalRecordPEData } from "@/components/form-medical-record-pe/types";

export interface State {
  physicalExam: MedicalRecordPEData;
}

export type Action =
  | {
    type: "SET_CHIEF_COMPLAIN";
    payload: string;
  }
  | {
    type: "SET_VITAL_SIGN_TEMP";
    payload: number;
  }
  | {
    type: "SET_VITAL_SIGN_HEART_RATE";
    payload: number;
  }
  | {
    type: "SET_OBJECTIVE_VALUE";
    payload: string;
  }
  | {
    type: "SET_INITIAL_STATE";
    payload: State;
  };
