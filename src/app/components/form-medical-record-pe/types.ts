export interface FormMedicalRecordPEProps {
  data: MedicalRecordPEData;
  onChiefComplainChange: (payload: string) => void;
  onVitalSignTempChange: (payload: number) => void;
  onVitalSignHeartRateChange: (payload: number) => void;
  onObjectiveValueChange: (payload: string) => void;
}

export interface FormMedicalRecordSubjectiveProps {
  data: MedicalRecordSubjectiveData;
  onChiefComplainChange: (payload: string) => void;
  onVitalSignTempChange: (payload: number) => void;
  onVitalSignHeartRateChange: (payload: number) => void;
}

export interface FormMedicalRecordObjectiveProps {
  data: MedicalRecordObjectiveData;
  onObjectiveValueChange: (payload: string) => void;
}

export interface MedicalRecordPEData {
  subjective: MedicalRecordSubjectiveData;
  objective: MedicalRecordObjectiveData;
}

export interface MedicalRecordSubjectiveData {
  chiefComplain: string;
  vitalSign: MedicalRecordVitalSign;
}

export interface MedicalRecordObjectiveData {
  value: string;
}

export interface MedicalRecordVitalSign {
  temp: number;
  heartRate: number;
}
