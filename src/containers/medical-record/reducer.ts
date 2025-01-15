import { initialMedicalRecordState } from "./state";
import type { Action, State } from "./types";

export default function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_CHIEF_COMPLAIN":
      return {
        ...state,
        physicalExam: {
          ...state.physicalExam,
          subjective: {
            ...state.physicalExam.subjective,
            chiefComplain: action.payload,
          },
        },
      };

    case "SET_VITAL_SIGN_TEMP":
      return {
        ...state,
        physicalExam: {
          ...state.physicalExam,
          subjective: {
            ...state.physicalExam.subjective,
            vitalSign: {
              ...state.physicalExam.subjective.vitalSign,
              temp: action.payload,
            },
          },
        },
      };

    case "SET_VITAL_SIGN_HEART_RATE":
      return {
        ...state,
        physicalExam: {
          ...state.physicalExam,
          subjective: {
            ...state.physicalExam.subjective,
            vitalSign: {
              ...state.physicalExam.subjective.vitalSign,
              heartRate: action.payload,
            },
          },
        },
      };

    case "SET_OBJECTIVE_VALUE":
      return {
        ...state,
        physicalExam: {
          ...state.physicalExam,
          objective: {
            ...state.physicalExam.objective,
            value: action.payload,
          },
        },
      };

    case "SET_INITIAL_STATE":
      return initialMedicalRecordState;

    default:
      return state;
  }
}
