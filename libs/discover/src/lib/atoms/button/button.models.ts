import { ReactElement } from "react";

export interface ButtonI {
  text: string;
  Icon: () => ReactElement;
  className?: string;
}