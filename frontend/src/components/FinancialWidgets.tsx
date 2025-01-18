import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FinancialWidget from "./FinancialWidget";
import { AccountType } from "../types/financial";

const FinancialWidgets: React.FC = () => {
  return (
    <Box>
      <Grid
        container
        sx={{ direction: "row", width: "100%", marginTop: 2 }}
        spacing={2}
      >
        <Grid size={{ xs: 12, sm: 12, md: 4 }}>
          <FinancialWidget
            accountType={AccountType.BusinessAccount}
            balance={1569.26}
            period={30}
            balanceChange={15.36}
            previousBalance={13589.69}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4 }}>
          <FinancialWidget
            accountType={AccountType.TotalSaving}
            balance={96583.26}
            period={30}
            balanceChange={23.36}
            previousBalance={76583.69}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4 }}>
          <FinancialWidget
            accountType={AccountType.TaxReserve}
            balance={586349.42}
            period={30}
            balanceChange={49.85}
            previousBalance={869349.69}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FinancialWidgets;
