"use client";

import { useEffect } from "react";

import type { Dispatch } from "react";
import { Action } from "./types";
import { initialMedicalRecordState } from "./state";

export default function useClearMedicalRecord({
  dispatch,
}: {
  dispatch: Dispatch<Action>;
}) {
  useEffect(() => {
    return () => {
      dispatch({
        type: "SET_INITIAL_STATE",
        payload: initialMedicalRecordState,
      });
    };
  }, [dispatch]);
}
