import { Button } from "@mui/material";

function CustomButton({
  children,
  onClick,
  type = "button",
  startIcon,
  disabled,
  sx = {},
  fullWidth,
  variant = "contained",
}) {
  return (
    <Button
      type={type}
      onClick={onClick}
      startIcon={startIcon}
      disabled={disabled}
      fullWidth={fullWidth}
      variant={variant}
      sx={{
        textTransform: "none",
        fontWeight: 600,
        borderRadius: 2,
        py: 1.4,
        bgcolor: "var(--accent)",
        "&:hover": {
          bgcolor: "var(--accent-hover)",
        },
        ...sx, 
      }}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
