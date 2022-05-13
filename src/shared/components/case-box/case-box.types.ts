import type { Dispatch, SetStateAction } from "react";

export interface CaseBoxProps {
  isOpen: boolean;
  openSetter: Dispatch<SetStateAction<boolean>>;
  caseData?: {
    color: string;
    fullTitle: string;
    icon: string;
    price: number;
    subtitle: string;
    title: string;
    url: string;
  };
}
