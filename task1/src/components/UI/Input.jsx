import { TextField } from "@mui/material";

function CustomInput({
  label,
  value,
  onChange,
  type = "number",
  multiline = false,
  rows = 1,
  required = false,
}) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      multiline={multiline}
      rows={rows}
      required={required}
      fullWidth
      sx={{
        "& .MuiInputLabel-root": {
          color: "var(--text-soft)",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "var(--accent)",
        },
        "& .MuiOutlinedInput-root": {
          bgcolor: "rgba(255,255,255,0.05)",
          borderRadius: 2,
          color: "var(--text-main)",
          "& fieldset": {
            borderColor: "var(--divider)",
          },
          "&:hover fieldset": {
            borderColor: "var(--accent)",
          },
          "&.Mui-focused fieldset": {
            borderColor: "var(--accent)",
          },
        },
      }}
    />
  );
}

export default CustomInput;
