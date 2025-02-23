import {
  Box,
  Button,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import {
  Add,
  ArrowUpward,
  FilterList,
  StackedLineChart,
  SwapVert,
} from "@mui/icons-material";

interface RecentActivityProps {
  cards: unknown[];
}

function createData(
  type: {
    recipient: string;
    date: string;
    type: "Add" | "Sent";
  },
  amount: {
    transactionAmount: number;
    balance: number;
  },
  status: "success" | "pending" | "failed",
  method: {
    method: "Credit Card" | "Bank Transfer" | "Debit Card";
    cardLast4: string;
  }
) {
  return { type, amount, status, method };
}

const rows = [
  createData(
    { recipient: "Usman", date: "2025-01-21", type: "Sent" },
    { transactionAmount: 100, balance: 39654 },
    "success",
    { method: "Credit Card", cardLast4: "2563" }
  ),
  createData(
    { recipient: "Aisha", date: "2025-01-20", type: "Add" },
    { transactionAmount: 500, balance: 40154 },
    "pending",
    { method: "Bank Transfer", cardLast4: "" }
  ),
  createData(
    { recipient: "John", date: "2025-01-19", type: "Add" },
    { transactionAmount: 300, balance: 39854 },
    "failed",
    { method: "Debit Card", cardLast4: "8723" }
  ),
  createData(
    { recipient: "Emily", date: "2025-01-18", type: "Sent" },
    { transactionAmount: 200, balance: 40254 },
    "success",
    { method: "Credit Card", cardLast4: "9845" }
  ),
  createData(
    { recipient: "Michael", date: "2025-01-17", type: "Add" },
    { transactionAmount: 750, balance: 41004 },
    "success",
    { method: "Bank Transfer", cardLast4: "" }
  ),
  createData(
    { recipient: "Sophia", date: "2025-01-16", type: "Sent" },
    { transactionAmount: 150, balance: 39804 },
    "pending",
    { method: "Debit Card", cardLast4: "4501" }
  ),
  createData(
    { recipient: "Ali", date: "2025-01-15", type: "Add" },
    { transactionAmount: 1200, balance: 41204 },
    "success",
    { method: "Credit Card", cardLast4: "1234" }
  ),
  createData(
    { recipient: "Noah", date: "2025-01-14", type: "Sent" },
    { transactionAmount: 50, balance: 39754 },
    "failed",
    { method: "Bank Transfer", cardLast4: "2551" }
  ),
  createData(
    { recipient: "Olivia", date: "2025-01-13", type: "Add" },
    { transactionAmount: 300, balance: 40054 },
    "success",
    { method: "Debit Card", cardLast4: "5678" }
  ),
];

const RecentActivity: React.FC<RecentActivityProps> = ({ cards }) => {
  console.log(cards);
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
          <StackedLineChart color="success" />
          <Typography marginLeft={2}>Recent Activity</Typography>
        </Box>
        <Box sx={{ gap: 1, display: "flex" }}>
          <Button
            variant="contained"
            color="inherit"
            sx={{ borderRadius: 2 }}
            startIcon={<FilterList />}
          >
            Filter
          </Button>
          <Button
            variant="contained"
            color="inherit"
            sx={{ borderRadius: 2 }}
            startIcon={<SwapVert />}
          >
            Sort
          </Button>
          <Button variant="contained" color="inherit" sx={{ borderRadius: 2 }}>
            ...
          </Button>
        </Box>
      </Box>
      <TableContainer sx={{ marginTop: 1 }}>
        <Divider />
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 500, fontSize: 15 }}>Type</TableCell>
              <TableCell
                align="right"
                sx={{ fontWeight: 900500, fontSize: 15 }}
              >
                AMOUNT
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 500, fontSize: 15 }}>
                STATUS
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 500, fontSize: 15 }}>
                METHOD
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.type.type}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box
                    sx={{
                      gap: 3,
                      display: "flex",
                      direction: "row",
                    }}
                  >
                    <Box
                      sx={{
                        spacing: 1,
                        backgroundColor: "#e5fbf1",
                        height: { lg: 60, md: 40, sm: 30, xs: 30 },
                        width: { lg: 60, md: 40, sm: 30, xs: 30 },
                        display: "flex",
                        borderRadius: "50%",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {row.type.type === "Sent" ? (
                        <Add
                          sx={{
                            fontSize: 30,
                            color: "#0a975d",
                          }}
                        />
                      ) : (
                        <ArrowUpward sx={{ fontSize: 30, color: "#0a975d" }} />
                      )}
                    </Box>

                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                    >
                      <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                        {row.type.recipient}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {row.type.type} -{" "}
                        {`${new Date(row.type.date).getDay()} 
                          ${new Date(row.type.date).toLocaleString("default", {
                            month: "short",
                          })} ${new Date(row.type.date).getFullYear()}`}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                      £ {row.amount.balance}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {row.amount.transactionAmount} USD
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Chip
                    sx={{
                      padding: 1,
                      borderRadius: 2,
                      fontSize: 15,
                      width: 100,
                      backgroundColor:
                        row.status === "failed"
                          ? "#f1948a"
                          : row.status === "pending"
                          ? "primary"
                          : "#e5fbf1",
                      color:
                        row.status === "failed"
                          ? "#943126"
                          : row.status === "pending"
                          ? "grey"
                          : "#0a975d",
                    }}
                    label={row.status}
                  />
                </TableCell>
                <TableCell align="right">
                  <Box
                    sx={{
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                      {row.method.method}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      **** {row.method.cardLast4}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RecentActivity;
