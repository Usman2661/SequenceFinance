export const loginInputStyle = {
  color: "white", // Default text color
  "& .MuiInputLabel-root": {
    color: "#b2babb", // Label color
  },
  "& .MuiOutlinedInput-root": {
    color: "white", // Default text color inside the input
    backgroundColor: "#2c3e50", // Change the background color inside the input field
    "& fieldset": {
      borderColor: "#134b4e", // Default border color (when not focused)
    },
    // Change outline color on focus or click
    "&.Mui-focused fieldset": {
      borderColor: "#134b4e", // Border color when focused or clicked
    },
    "&:hover fieldset": {
      borderColor: "#134b4e", // Border color when hovered
    },
  },
};
