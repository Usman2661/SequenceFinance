import { AccountBalance } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const FinancialWidgets: React.FC = () => {
  return (
    <Box>
      <Grid
        container
        sx={{ direction: "row", width: "100%", marginTop: 2 }}
        spacing={2}
      >
        <Grid size={{ xs: 4, sm: 4 }}>
          <Box
            sx={{
              border: "1px solid #b3b6b7",
              borderRadius: 3,
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "column",
              padding: 4,
            }}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent={"space-between"}
            >
              <Box display={"flex"} flexDirection="row">
                <AccountBalance color="success" />
                <Typography marginLeft={2}>Business Account</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="textSecondary">
                  Last 30 days
                </Typography>
              </Box>
            </Box>

            <Box display="flex" flexDirection="row" marginTop={2}>
              <Typography variant="h3">$ 8098,09</Typography>
              <Typography
                color="#0fd47e"
                sx={{
                  fontSize: "1rem",
                  marginTop: 3,
                  marginLeft: 1,
                }}
              >
                +15.87↗
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row" marginTop={1}>
              <Typography variant="body2" color="textSecondary">
                vs $ 7,09289 Last 30 days
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 4, sm: 4 }}>
          <Box
            sx={{
              border: "1px solid #b3b6b7",
              borderRadius: 3,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 4,
            }}
          ></Box>
        </Grid>
        <Grid size={{ xs: 4, sm: 4 }}>
          <Box
            sx={{
              border: "1px solid #b3b6b7",
              borderRadius: 3,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 4,
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FinancialWidgets;
