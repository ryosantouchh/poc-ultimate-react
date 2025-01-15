import FormMedicalRecordObjective from "./form-medical-record-objective";
import FormMedicalRecordSubjective from "./form-medical-record-subjective";

import type { FormMedicalRecordPEProps } from "./types";

export default function FormMedicalRecordPE({
  data,
  // Subjective
  onChiefComplainChange,
  onVitalSignTempChange,
  onVitalSignHeartRateChange,
  // Objective
  onObjectiveValueChange,
}: FormMedicalRecordPEProps) {
  return (
    <div>
      <FormMedicalRecordSubjective
        data={data.subjective}
        onChiefComplainChange={onChiefComplainChange}
        onVitalSignHeartRateChange={onVitalSignHeartRateChange}
        onVitalSignTempChange={onVitalSignTempChange}
      />

      <FormMedicalRecordObjective
        data={data.objective}
        onObjectiveValueChange={onObjectiveValueChange}
      />
    </div>
  );
}
