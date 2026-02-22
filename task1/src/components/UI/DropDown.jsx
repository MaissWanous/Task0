import { FormControl, InputLabel, Select, MenuItem, Box, Typography } from "@mui/material";

export default function DropDown({ label, value, onChange, options = [] }) {
  return (
    <FormControl fullWidth size="small" sx={{ minWidth: 140 }}>
      <InputLabel
        sx={{
          color: "var(--text-soft)",
          "&.Mui-focused": { color: "var(--accent)" },
        }}
      >
        {label}
      </InputLabel>

      <Select
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
        sx={{
          bgcolor: "rgba(255,255,255,0.05)",
          borderRadius: 2,
          color: "var(--text-main)",
          height: 42,
          display: "flex",
          width: 150,
          alignItems: "center",
          px: 1.5,

          "& .MuiSelect-icon": {
            color: "var(--text-soft)",
          },

          "& fieldset": {
            borderColor: "var(--divider)",
          },

          "&:hover fieldset": {
            borderColor: "var(--accent)",
          },

          "&.Mui-focused fieldset": {
            borderColor: "var(--accent)",
          },

          ...(value && {
            "& fieldset": {
              borderColor: "var(--accent)",
            },
          }),
        }}
      >
        {[...new Set(options.map(t => t.currency))].map((currency) => {
          const iconUrl = `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${currency}.svg`;

          return (
            <MenuItem key={currency} value={currency}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img
                  src={iconUrl}
                  alt={currency}
                  width={20}
                  height={20}
                  style={{ borderRadius: "50%" }}
                />
                <Typography>{currency}</Typography>
              </Box>
            </MenuItem>
          );
        })}

      </Select>
    </FormControl>
  );
}
