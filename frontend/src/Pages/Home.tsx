import React from "react";
import Grid from "@mui/material/Grid2";

import TotalBalance from "../components/TotalBalance";
import FinancialWidgets from "../components/FinancialWidgets";
import CashFlow from "../components/Cashflow";
import RecentActivity from "../components/RecentActivity";
import MyCards from "../components/Cards";

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
        <Grid size={{ xs: 9, sm: 8 }}>
          <RecentActivity cards={[]} />
        </Grid>
        <Grid size={{ xs: 3, sm: 4 }}>
          <MyCards cards={[]} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
