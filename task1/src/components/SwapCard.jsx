import {  Typography } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { Card, CardContent, Stack, Divider } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";

import DropDown from "./UI/DropDown";
import CustomInput from "./UI/Input";
import CustomButton from "./UI/Button";

export default function SwapCard({
  from,
  to,
  amount,
  result,
  tokens,
  setFrom,
  setTo,
  setAmount,
  onSwap,
}) {
  return (
    <Card
      sx={{
        width: 420,
        bgcolor: "var(--card-bg)",
        color: "var(--text-main)",
        borderRadius: 4,
        boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
        border: "1px solid var(--card-border)",
        
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 3, textAlign: "center" }}
        >
          Currency Swap
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            bgcolor: "var(--panel-bg)",
            borderRadius: 3,
            p: 2.5,
            mb: 3,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <DropDown
              label="From"
              value={from}
              onChange={setFrom}
              options={tokens}
            />
          </Stack>

          <SwapHorizIcon
            sx={{
              fontSize: 30,
              color: "var(--swap-symbol)",
            }}
          />

         
          <Stack direction="row" alignItems="center" spacing={1.5}>
        
            <DropDown
              label="To"
              value={to}
              onChange={setTo}
              options={tokens}
            />
          </Stack>
        </Stack>

        <Divider sx={{ borderColor: "var(--divider)", mb: 3 }} />

        
        <CustomInput
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {result && (
          <Typography sx={{ mt: 3, fontSize: 18, textAlign: "center" }}>
            Result: <strong>{result} {to}</strong>
          </Typography>
        )}

     
        <CustomButton
        startIcon={<AutorenewIcon sx={{ fontSize: 22 }} />}
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          onClick={onSwap}
        >
          Swap
        </CustomButton>
      </CardContent>
    </Card>
  );
}
