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
export const returnIcon = (
  text: string,
  activeItem: string,
  darkMode: boolean
) => {
  const iconMap: { [key: string]: JSX.Element } = {
    Dashboard: (
      <Explore
        sx={{
          color:
            text === activeItem
              ? getActiveColor(darkMode, "#025864", "white")
              : getActiveColor(darkMode, "black", "white"),
        }}
      />
    ),
    Payment: (
      <SwapHoriz
        sx={{
          color:
            text === activeItem
              ? getActiveColor(darkMode, "#025864", "white")
              : getActiveColor(darkMode, "black", "white"),
        }}
      />
    ),
    Transaction: (
      <FormatListBulleted
        sx={{
          color:
            text === activeItem
              ? getActiveColor(darkMode, "#025864", "white")
              : getActiveColor(darkMode, "black", "white"),
        }}
      />
    ),
    Cards: (
      <CreditCard
        sx={{
          color:
            text === activeItem
              ? getActiveColor(darkMode, "#025864", "white")
              : getActiveColor(darkMode, "black", "white"),
        }}
      />
    ),
    Capitals: (
      <RequestQuote
        sx={{
          color:
            text === activeItem
              ? getActiveColor(darkMode, "#025864", "white")
              : getActiveColor(darkMode, "black", "white"),
        }}
      />
    ),
    Reports: (
      <LibraryBooks
        sx={{
          color:
            text === activeItem
              ? getActiveColor(darkMode, "#025864", "white")
              : getActiveColor(darkMode, "black", "white"),
        }}
      />
    ),
    Vaults: (
      <ElectricBolt
        sx={{
          color:
            text === activeItem
              ? getActiveColor(darkMode, "#025864", "white")
              : getActiveColor(darkMode, "black", "white"),
        }}
      />
    ),
    Earn: (
      <Redeem
        sx={{
          color:
            text === activeItem
              ? getActiveColor(darkMode, "#025864", "white")
              : getActiveColor(darkMode, "black", "white"),
        }}
      />
    ),
    Settings: (
      <Settings
        sx={{
          color:
            text === activeItem
              ? getActiveColor(darkMode, "#025864", "white")
              : getActiveColor(darkMode, "black", "white"),
        }}
      />
    ),
    Help: (
      <Help
        sx={{
          color:
            text === activeItem
              ? getActiveColor(darkMode, "#025864", "white")
              : getActiveColor(darkMode, "black", "white"),
        }}
      />
    ),
    "Pro Mode": (
      <Diamond
        sx={{
          color:
            text === activeItem
              ? getActiveColor(darkMode, "#025864", "white")
              : getActiveColor(darkMode, "black", "white"),
        }}
      />
    ),
    "Dark Mode": (
      <DarkMode
        sx={{
          color:
            text === activeItem
              ? getActiveColor(darkMode, "#025864", "white")
              : getActiveColor(darkMode, "black", "white"),
        }}
      />
    ),
  };

  return iconMap[text] || null;
};

export const getActiveColor = (
  darkMode: boolean,
  normalColor: string,
  darkModeColor: string
) => {
  return darkMode ? darkModeColor : normalColor;
};
