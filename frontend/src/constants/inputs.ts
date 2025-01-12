export const loginInputStyle = {
  color: "white", // Default text color
  "& .MuiInputLabel-root": {
    color: "#B4B2BA", // Label color
  },
  "& .MuiOutlinedInput-root": {
    color: "white", // Default text color inside the input
    backgroundColor: "#3B364C", // Change the background color inside the input field
    "& fieldset": {
      borderColor: "#BDA6F6", // Default border color (when not focused)
    },
    // Change outline color on focus or click
    "&.Mui-focused fieldset": {
      borderColor: "#BDA6F6", // Border color when focused or clicked
    },
    "&:hover fieldset": {
      borderColor: "#BDA6F6", // Border color when hovered
    },
  },
};

export const loginInputStartProps = { "&.Mui-focused": { color: "white" } };
