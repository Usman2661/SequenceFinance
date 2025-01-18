import { ArrowOutward, CallReceived } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

import { CashflowType } from "../types/financial";

interface CashflowWidgetProps {
  value: number;
  cashFlowType: CashflowType;
  change: number;
}

const CashflowFinancialWidget: React.FC<CashflowWidgetProps> = ({
  value,
  cashFlowType,
  change,
}) => {
  const returnIcon = (cashflowType: CashflowType) => {
    switch (cashflowType) {
      case CashflowType.Expense:
        return (
          <Box
            sx={{
              display: "flex",
              padding: 3,
              borderRadius: 2,
              backgroundColor: "#0fd47e",
            }}
          >
            <ArrowOutward sx={{ fontSize: 25, color: "white" }} />
          </Box>
        );
      case CashflowType.Income:
        return (
          <Box
            sx={{
              display: "flex",
              padding: 3,
              borderRadius: 2,
              backgroundColor: "#025864",
            }}
          >
            <CallReceived sx={{ fontSize: 25, color: "white" }} />
          </Box>
        );
      default:
        return <ArrowOutward />;
    }
  };
  return (
    <Box
      sx={{
        borderRadius: 3,
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
        padding: 4,
      }}
    >
      <Box display="flex" flexDirection="row" justifyContent={"space-between"}>
        <Box display={"flex"} flexDirection="row" height={70}>
          {returnIcon(cashFlowType)}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            direction: "column",
          }}
        >
          <Typography variant="h6">{cashFlowType}</Typography>
          <div>
            <Typography variant="h3">${value}</Typography>
            <Typography
              color="#0fd47e"
              sx={{
                fontSize: "1rem",
                marginTop: 3,
                marginLeft: 1,
              }}
            >
              +{change}↗
            </Typography>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default CashflowFinancialWidget;
