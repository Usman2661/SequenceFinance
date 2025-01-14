import { Box, Typography } from "@mui/material";

const TotalBalance: React.FC = () => {
  return (
    <Box
      sx={{
        borderRadius: 3,
        boxShadow: 1,
        alignContent: "flex-end",
        alignItems: "flex-end",
        height: "100px",
        backgroundColor: "green",
        padding: 2,
      }}
    >
      <Typography>Total Balance</Typography>
    </Box>
  );
};

export default TotalBalance;
