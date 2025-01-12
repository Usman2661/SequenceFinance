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
  DarkMode,
} from "@mui/icons-material";

// Using an object to map the text to icons for cleaner code
export const returnIcon = (text: string, activeItem: string) => {
  const iconMap: { [key: string]: JSX.Element } = {
    Dashboard: (
      <Explore sx={{ color: text === activeItem ? "#025864" : "black" }} />
    ),
    Payment: (
      <SwapHoriz sx={{ color: text === activeItem ? "#025864" : "black" }} />
    ),
    Transaction: (
      <FormatListBulleted
        sx={{ color: text === activeItem ? "#025864" : "black" }}
      />
    ),
    Cards: (
      <CreditCard sx={{ color: text === activeItem ? "#025864" : "black" }} />
    ),
    Capitals: (
      <RequestQuote sx={{ color: text === activeItem ? "#025864" : "black" }} />
    ),
    Reports: (
      <LibraryBooks sx={{ color: text === activeItem ? "#025864" : "black" }} />
    ),
    Vaults: (
      <ElectricBolt sx={{ color: text === activeItem ? "#025864" : "black" }} />
    ),
    Earn: <Redeem sx={{ color: text === activeItem ? "#025864" : "black" }} />,
    Settings: (
      <Settings sx={{ color: text === activeItem ? "#025864" : "black" }} />
    ),
    Help: <Help sx={{ color: text === activeItem ? "#025864" : "black" }} />,
    "Pro Mode": (
      <Diamond sx={{ color: text === activeItem ? "#025864" : "black" }} />
    ),
    "Dark Mode": (
      <DarkMode sx={{ color: text === activeItem ? "#025864" : "black" }} />
    ),
  };

  return iconMap[text] || null; // Return null if no matching icon is found
};
