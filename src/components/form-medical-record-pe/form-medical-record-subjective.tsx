import { JSX, memo } from "react";
import { FormMedicalRecordSubjectiveProps } from "./types";
import {
  useMedicalRecordDispatch,
  useMedicalRecordSubjectiveContext,
} from "@/containers/medical-record/contexts";

// function FormMedicalRecordSubjective({
//   data,
//   onChiefComplainChange,
//   onVitalSignHeartRateChange,
//   onVitalSignTempChange,
// }: FormMedicalRecordSubjectiveProps) {

export default function FormMedicalRecordSubjective() {
  console.log("FormMedicalRecordSubjective -- render");

  const state = useMedicalRecordSubjectiveContext();
  const dispatch = useMedicalRecordDispatch()!;

  // const handleEvent = useCallback(
  //   (type: string) => {
  //     return function (payload: unknown) {
  //       dispatch({ type, payload } as Action);
  //     };
  //   },
  //   [dispatch],
  // );

  // function handleEvent(type: string) {
  //   return function (payload: unknown) {
  //     dispatch({ type, payload } as Action);
  //   };
  // }

  return (
    <>
      <label>chiefComplain</label>
      <div>
        <input
          type="text"
          // value={data.chiefComplain}
          value={state.chiefComplain}
          // onChange={(e) => {
          //   onChiefComplainChange(e.target.value);
          // }}
          onChange={(e) =>
            dispatch({ type: "SET_CHIEF_COMPLAIN", payload: e.target.value })
          }
        />
      </div>

      {/* <div> */}
      {/*   <label>Temp</label> */}
      {/*   <input */}
      {/*     type="number" */}
      {/*     value={data.vitalSign.temp} */}
      {/*     onChange={(e) => onVitalSignTempChange(+e.target.value)} */}
      {/*   /> */}
      {/* </div> */}
      {/**/}
      {/* <div> */}
      {/*   <label>Heart Rate</label> */}
      {/*   <input */}
      {/*     type="number" */}
      {/*     value={data.vitalSign.heartRate} */}
      {/*     onChange={(e) => onVitalSignHeartRateChange(+e.target.value)} */}
      {/*   /> */}
      {/* </div> */}
    </>
  );
}

// export default memo<(props: FormMedicalRecordSubjectiveProps) => JSX.Element>(
//   FormMedicalRecordSubjective,
//   areEqualProps,
// );
//
// function areEqualProps(
//   prevProps: Readonly<FormMedicalRecordSubjectiveProps>,
//   newProps: Readonly<FormMedicalRecordSubjectiveProps>,
// ) {
//   return prevProps.data === newProps.data;
// }
