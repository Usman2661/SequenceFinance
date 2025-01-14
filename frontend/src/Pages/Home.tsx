import React from "react";
import Grid from "@mui/material/Grid2";

import TotalBalance from "../components/TotalBalance";

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
      </Grid>
    </div>
  );
};

export default Home;
