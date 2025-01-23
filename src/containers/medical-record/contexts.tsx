import {
  createContext,
  Dispatch,
  JSX,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { Action } from "./types";
import {
  initialMedicalRecordState,
  // initialMedicalRecordState,
  initialObjectiveExam,
  initialSubjectiveExam,
} from "./state";
import {
  MedicalRecordObjectiveData,
  MedicalRecordSubjectiveData,
} from "@/components/form-medical-record-pe/types";
import reducer from "./reducer";

export const MedicalRecordDispatchContext =
  createContext<Dispatch<Action> | null>(null);

export const MedicalRecordSubjectiveContext =
  createContext<MedicalRecordSubjectiveData>(initialSubjectiveExam);

export const MedicalRecordObjectiveContext =
  createContext<MedicalRecordObjectiveData>(initialObjectiveExam);

export default function MedicalRecordContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [state, dispatch] = useReducer(reducer, initialMedicalRecordState);

  // const subjectiveExamMemo = useMemo(
  //   () => ({ state: state.physicalExam.subjective, dispatch }),
  //   [state.physicalExam.subjective],
  // );
  // const objectiveExamMemo = useMemo(
  //   () => ({ state: state.physicalExam.objective, dispatch }),
  //   [state.physicalExam.objective],
  // );

  return (
    <MedicalRecordDispatchContext.Provider value={dispatch}>
      <MedicalRecordSubjectiveContext.Provider
        value={state.physicalExam.subjective}
      // value={subjectiveExamMemo.state}
      >
        <MedicalRecordObjectiveContext.Provider
          value={state.physicalExam.objective}
        // value={objectiveExamMemo.state}
        >
          {children}
        </MedicalRecordObjectiveContext.Provider>
      </MedicalRecordSubjectiveContext.Provider>
    </MedicalRecordDispatchContext.Provider>
  );
}

export function useMedicalRecordSubjectiveContext() {
  return useContext(MedicalRecordSubjectiveContext);
}

export function useMedicalRecordObjectiveContext() {
  return useContext(MedicalRecordObjectiveContext);
}

export function useMedicalRecordDispatch() {
  return useContext(MedicalRecordDispatchContext);
}
