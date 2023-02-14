import { ReactElement } from "react";

export interface ButtonI {
  text: string;
  Icon: () => ReactElement;
  className?: string;
  type?: string;
}

export interface ButtonStyleI {
  typeButton?: string;
}