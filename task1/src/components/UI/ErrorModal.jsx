import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";

import CustomButton from "../UI/Button";

export default function ErrorModal({ open, onClose, message }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          bgcolor: "var(--card-bg)",
          color: "var(--text-main)",
          borderRadius: 3,
          border: "1px solid var(--card-border)",
          boxShadow: "0 0 30px rgba(0,0,0,0.6)",
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: "bold",  color: "var(--error-main)" }}>
        Error
      </DialogTitle>

      <DialogContent>
        <Typography sx={{ fontSize: "18px", textAlign: "center", color: "var(--text-main)" }}>
          {message}
        </Typography>
      </DialogContent>

      <DialogActions>
        <CustomButton
          onClick={onClose}
          type="button"
          sx={{
            bgcolor: "var(--accent)",
            color: "#fff",
            "&:hover": { bgcolor: "var(--accent-hover)" },
          }}
        >
          Close
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
}
