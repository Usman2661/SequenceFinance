import React from "react";
import Grid from "@mui/material/Grid2";

import TotalBalance from "../components/TotalBalance";
import FinancialWidgets from "../components/FinancialWidgets";
import CashFlow from "../components/Cashflow";

const Home: React.FC = () => {
  return (
    <div>
      <Grid
        container
        sx={{ direction: "row", width: "100%", marginTop: 2 }}
        spacing={2}
      >
        <Grid size={{ xs: 12, sm: 12 }}>
          <TotalBalance />
        </Grid>
        <Grid size={{ xs: 12, sm: 12 }}>
          <CashFlow />
        </Grid>
        <Grid size={{ xs: 12, sm: 12 }}>
          <FinancialWidgets />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
