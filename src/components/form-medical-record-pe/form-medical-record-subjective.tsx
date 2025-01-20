import { JSX, memo } from "react";
import { FormMedicalRecordSubjectiveProps } from "./types";

function FormMedicalRecordSubjective({
  data,
  onChiefComplainChange,
  onVitalSignHeartRateChange,
  onVitalSignTempChange,
}: FormMedicalRecordSubjectiveProps) {
  console.log("FormMedicalRecordSubjective -- render");

  return (
    <>
      <label>chiefComplain</label>
      <div>
        <input
          type="text"
          value={data.chiefComplain}
          onChange={(e) => {
            onChiefComplainChange(e.target.value);
          }}
        />
      </div>

      <div>
        <label>Temp</label>
        <input
          type="number"
          value={data.vitalSign.temp}
          onChange={(e) => onVitalSignTempChange(+e.target.value)}
        />
      </div>

      <div>
        <label>Heart Rate</label>
        <input
          type="number"
          value={data.vitalSign.heartRate}
          onChange={(e) => onVitalSignHeartRateChange(+e.target.value)}
        />
      </div>
    </>
  );
}

export default memo<(props: FormMedicalRecordSubjectiveProps) => JSX.Element>(
  FormMedicalRecordSubjective,
  areEqualProps,
);

function areEqualProps(
  prevProps: Readonly<FormMedicalRecordSubjectiveProps>,
  newProps: Readonly<FormMedicalRecordSubjectiveProps>,
) {
  return prevProps.data === newProps.data;
}
