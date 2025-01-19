import { Box, Button, Typography } from "@mui/material";

import { HeartBroken } from "@mui/icons-material";

interface RecentActivityProps {
  cards: unknown[];
}

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
          <HeartBroken />
          <Typography marginLeft={2}>Recent Activity</Typography>
        </Box>
        <Box>
          <Button variant="contained" sx={{ borderRadius: 1 }}>
            See All
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RecentActivity;
