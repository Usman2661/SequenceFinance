import { Add, ArrowUpward, Autorenew } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const TotalBalance: React.FC = () => {
  return (
    <Box
      sx={{
        borderRadius: 3,
        boxShadow: 1,
        backgroundColor: "#025864",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 3,
      }}
    >
      <Box>
        <Typography color="white">Total Balance</Typography>
        <Typography variant="h3" color="white">
          € 2151,526
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          sx={{ borderRadius: 2 }}
          startIcon={<Add />}
        >
          Add
        </Button>
        <Button
          variant="contained"
          sx={{ borderRadius: 2 }}
          startIcon={<ArrowUpward />}
        >
          Send
        </Button>
        <Button variant="contained" startIcon={<Autorenew />}>
          Request
        </Button>
      </Box>
    </Box>
  );
};

export default TotalBalance;
