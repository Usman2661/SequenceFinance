import { Contactless, CreditCard } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

interface MyCardsProps {
  cards: unknown[];
}

const MyCards: React.FC<MyCardsProps> = ({ cards }) => {
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
          <CreditCard />
          <Typography marginLeft={2}>My Cards</Typography>
        </Box>
        <Box>
          <Button variant="contained" color="inherit" sx={{ borderRadius: 2 }}>
            See All
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            marginTop: 1,
            width: "100%",
            backgroundColor: "#025864",
            borderRadius: 3,
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "column",
            padding: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              direction: "row",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Contactless sx={{ color: "white", fontSize: 50 }} />
            <Typography variant="h4" sx={{ color: "white" }}>
              **** **** **** 2104
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: 12,
              display: "flex",
              direction: "row",
              flexDirection: "row",
            }}
          >
            <Typography variant="h3" sx={{ color: "white" }}>
              € 1539.36
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MyCards;
