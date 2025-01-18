import { AccountBalance, Event, Savings } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { AccountType } from "../types/financial";

interface FinancialWidgetProps {
  balance: number;
  accountType: AccountType;
  balanceChange: number;
  period: number;
  previousBalance: number;
}

const FinancialWidget: React.FC<FinancialWidgetProps> = ({
  balance,
  balanceChange,
  accountType,
  period,
  previousBalance,
}) => {
  const returnIcon = (accountType: AccountType) => {
    switch (accountType) {
      case AccountType.BusinessAccount:
        return <AccountBalance color="success" />;
      case AccountType.TotalSaving:
        return <Savings color="success" />;
      case AccountType.TaxReserve:
        return <Event color="success" />;
      default:
        return <AccountBalance />;
    }
  };
  return (
    <Box
      sx={{
        border: "1px solid #ecf0f1",
        borderRadius: 3,
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
        padding: 4,
      }}
    >
      <Box display="flex" flexDirection="row" justifyContent={"space-between"}>
        <Box display={"flex"} flexDirection="row">
          {returnIcon(accountType)}
          <Typography marginLeft={2}>{accountType}</Typography>
        </Box>
        <Box>
          <Typography variant="body2" color="textSecondary">
            Last {period} Days
          </Typography>
        </Box>
      </Box>

      <Box display="flex" flexDirection="row" marginTop={2}>
        <Typography variant="h3">${balance}</Typography>
        <Typography
          color="#0fd47e"
          sx={{
            fontSize: "1rem",
            marginTop: 3,
            marginLeft: 1,
          }}
        >
          +{balanceChange}↗
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" marginTop={1}>
        <Typography variant="body2" color="textSecondary">
          vs $ {previousBalance} Last {period} days
        </Typography>
      </Box>
    </Box>
  );
};

export default FinancialWidget;
