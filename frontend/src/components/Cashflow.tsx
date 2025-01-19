import { ImportExport, Settings } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  DefaultTooltipContent,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { graphData } from "../data/graph";
import CashflowFinancialWidget from "./CashflowFinancialWidget";
import { CashflowType } from "../types/financial";

const CashFlow: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleButtonClick = (newValue: number): void => {
    setValue(newValue);
  };

  const activeStyle = {
    backgroundColor: "#f1f1f1",
    color: "#000",
  };

  const nonActiveStyle = {
    backgroundColor: "white", // Non-active color
    color: "#000",
  };

  return (
    <Box
      sx={{
        border: "1px solid #ecf0f1",
        borderRadius: 3,
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
        padding: 2,
        height: "100%",
      }}
    >
      <Box display="flex" flexDirection="row" justifyContent={"space-between"}>
        <Box display="flex" flexDirection="row" alignItems="center">
          <ImportExport color="success" />
          <Typography>Cashflow</Typography>
        </Box>

        <Box display="flex" flexDirection="row" gap={1}>
          <Box>
            <Button
              sx={{
                ...(value === 0 ? activeStyle : nonActiveStyle),
                borderRadius: 2,
                boxShadow: 0,
                border: "1px solid #ecf0f1",
              }}
              onClick={() => handleButtonClick(0)}
            >
              Weekly
            </Button>
            <Button
              sx={{
                ...(value === 1 ? activeStyle : nonActiveStyle),
                borderRadius: 2,
                boxShadow: 0,
                border: "1px solid #ecf0f1",
              }}
              onClick={() => handleButtonClick(1)}
            >
              Daily
            </Button>
          </Box>

          <Button
            variant="contained"
            color="inherit"
            sx={{
              borderRadius: 2,
              boxShadow: 0,
              border: "1px solid #ecf0f1",
            }}
            startIcon={<Settings />}
            size="small"
          >
            Manage
          </Button>
        </Box>
      </Box>

      <Grid container sx={{ direction: "row", width: "100%", marginTop: 2 }}>
        <Grid size={{ xs: 12, sm: 12, md: 8 }}>
          <Box
            sx={{
              display: "flex",
              direction: "column",
              marginTop: 4,
              height: "280px",
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={graphData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <DefaultTooltipContent />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="income" fill="#025864" />
                <Bar dataKey="expense" fill="#0fd47e" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

        <Grid size={{ xs: 12, sm: 12, md: 3 }}>
          <Box
            sx={{
              display: "flex",
              direction: "column",
              flexDirection: "column",
            }}
          >
            <CashflowFinancialWidget
              value={16985}
              change={12.36}
              cashFlowType={CashflowType.Income}
            />
            <Divider />
            <CashflowFinancialWidget
              value={126585}
              change={45.38}
              cashFlowType={CashflowType.Expense}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CashFlow;
