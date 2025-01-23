export const initialSubjectiveExam = {
  chiefComplain: "",
  vitalSign: {
    temp: 0,
    heartRate: 0,
  },
};

export const initialObjectiveExam = {
  value: "",
};

export const initialMedicalRecordState = {
  shared: {
    petId: null,
    userId: null,
  },
  petInfo: {
    petName: "",
  },
  physicalExam: {
    subjective: initialSubjectiveExam,
    objective: {
      value: "",
    },
  },
  diagnosis: [],
};
