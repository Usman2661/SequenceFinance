import { Add, ArrowUpward, Autorenew } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import { SequenceTheme } from "../types/theme";

const TotalBalance: React.FC = () => {
  const theme: SequenceTheme = useTheme();
  return (
    <Box
      sx={{
        borderRadius: 3,
        backgroundColor: theme.customColors.transaction.transactionPrimary,
        justifyContent: {
          xs: "center",
          md: "space-between",
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
