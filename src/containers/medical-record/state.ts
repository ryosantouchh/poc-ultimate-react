export const initialMedicalRecordState = {
  shared: {
    petId: null,
    userId: null,
  },
  petInfo: {
    petName: "",
  },
  physicalExam: {
    subjective: {
      chiefComplain: "",
      vitalSign: {
        temp: 0,
        heartRate: 0,
      },
    },
    objective: {
      value: "",
    },
  },
  diagnosis: [],
};
