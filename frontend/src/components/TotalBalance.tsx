import { Add, ArrowUpward, Autorenew } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const TotalBalance: React.FC = () => {
  return (
    <Box
      sx={{
        borderRadius: 3,
        backgroundColor: "#025864",
        justifyContent: {
          xs: "center", // Default for extra-small screens and up
          md: "space-between", // Changes to "center" on the `md` breakpoint and larger
        },
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
        padding: 4,
      }}
    >
      <Box>
        <Typography color="white">Total Balance</Typography>
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
          }}
        >
          <Typography variant="h3" color="white">
            € 2151,526
          </Typography>
          <Typography
            color="#0fd47e"
            sx={{
              fontSize: "1rem",
              marginLeft: 1,
            }}
          >
            +15.87↗
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Button
          variant="contained"
          sx={{ borderRadius: 2, backgroundColor: "#0fd47e" }}
          startIcon={<Add />}
          size="large"
        >
          Add
        </Button>
        <Button
          variant="contained"
          sx={{ borderRadius: 2, backgroundColor: "#2a737d" }}
          startIcon={<ArrowUpward />}
          size="large"
        >
          Send
        </Button>
        <Button
          variant="contained"
          startIcon={<Autorenew />}
          sx={{ borderRadius: 2, backgroundColor: "#2a737d" }}
          size="large"
        >
          Request
        </Button>
        <Button
          variant="contained"
          sx={{ borderRadius: 2, backgroundColor: "#2a737d" }}
          size="large"
        >
          ...
        </Button>
      </Box>
    </Box>
  );
};

export default TotalBalance;
