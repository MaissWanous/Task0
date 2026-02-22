import { Box, CircularProgress, Typography, Modal } from "@mui/material";

function Loading({ open, message = "Loading..." }) {
  return (
    <Modal
      open={open}
      aria-labelledby="loading-modal"
      aria-describedby="loading-indicator"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "var(--card-bg)",
          borderRadius: 3,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 30px rgba(0,0,0,0.6)",
          border: "1px solid var(--card-border)",
        }}
      >
        <CircularProgress
          size={70}
          thickness={5}
          sx={{
            color: "var(--accent)",
            mb: 2,
          }}
        />

        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "var(--text-main)",
            letterSpacing: 1,
          }}
        >
          {message}
        </Typography>
      </Box>
    </Modal>
  );
}

export default Loading;
