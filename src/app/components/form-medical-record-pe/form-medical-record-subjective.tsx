import { FormMedicalRecordSubjectiveProps } from "./types";

export default function FormMedicalRecordSubjective({
  data,
  onChiefComplainChange,
  onVitalSignHeartRateChange,
  onVitalSignTempChange,
}: FormMedicalRecordSubjectiveProps) {
  return (
    <>
      <div>
        <label>chiefComplain</label>
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
