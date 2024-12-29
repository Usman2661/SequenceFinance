import {
  Explore,
  FormatListBulleted,
  CreditCard,
  LibraryBooks,
  Redeem,
  ElectricBolt,
  RequestQuote,
  SwapHoriz,
  Settings,
  Help,
  Diamond,
} from "@mui/icons-material";

// Using an object to map the text to icons for cleaner code
export const returnIcon = (text: string) => {
  const iconMap: { [key: string]: JSX.Element } = {
    Dashboard: <Explore />,
    Payment: <SwapHoriz />,
    Transaction: <FormatListBulleted />,
    Cards: <CreditCard />,
    Capitals: <RequestQuote />,
    Reports: <LibraryBooks />,
    Vaults: <ElectricBolt />,
    Earn: <Redeem />,
    Settings: <Settings />,
    Help: <Help />,
    "Pro Mode": <Diamond />,
  };

  return iconMap[text] || null; // Return null if no matching icon is found
};
