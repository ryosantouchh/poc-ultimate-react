import { Profiler } from "react";
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
  //
  // NOTE: use onRender function together with <Profiler> to measure component performance
  function onRender(
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number,
  ) {
    console.log(id);
    console.log(phase);
    console.log(actualDuration);
    console.log(baseDuration);
  }

  return (
    <div>
      <Profiler id="subjective" onRender={onRender}>
        <FormMedicalRecordSubjective
          data={data.subjective}
          onChiefComplainChange={onChiefComplainChange}
          onVitalSignHeartRateChange={onVitalSignHeartRateChange}
          onVitalSignTempChange={onVitalSignTempChange}
        />
      </Profiler>

      <Profiler id="objective" onRender={onRender}>
        <FormMedicalRecordObjective
          data={data.objective}
          onObjectiveValueChange={onObjectiveValueChange}
        />
      </Profiler>
    </div>
  );
}
