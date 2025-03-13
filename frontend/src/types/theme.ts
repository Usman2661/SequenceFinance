import { ThemeOptions } from "@mui/material";

export interface SequenceTheme extends ThemeOptions {
  customColors: SequenceAppColors;
}

export interface SequenceAppColors {
  transaction: {
    transactionPrimary: string;
    transactionSecondary: string;
  };
  status: {
    statusSuccess: string;
    statusPending: string;
    statusFailed: string;
  };
  text: {
    innerSuccess: string;
    innerFailed: string;
    innerPending: string;
  };
}
