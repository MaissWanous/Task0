import { Box } from "@mui/material";
import { useState } from "react";
import useCurrency from "../hooks/useCurrency";


import Loading from "../src/components/UI/Loading";
import ErrorModal from "../src/components/UI/ErrorModal";
import SwapCard from "../src/components/SwapCard"
export default function CurrencyPage() {
  const { tokens, loading } = useCurrency();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const [error, setError] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);

  const [swapLoading, setSwapLoading] = useState(false);

  const showError = (msg) => {
    setError(msg);
    setErrorOpen(true);
  };

  const handleSwap = () => {
    if (!from || !to) return showError("Please select both currencies.");
    if (from === to) return showError("The two currencies must be different.");
    if (!amount || amount <= 0) return showError("Amount must be greater than zero.");

    setSwapLoading(true);

    setTimeout(() => {
      const fromPrice = tokens.find((t) => t.currency === from) ?.price;
      const toPrice = tokens.find((t) => t.currency === to) ?.price;

      if (!fromPrice || !toPrice) {
        showError("Invalid currency selection.");
        setSwapLoading(false);
        return;
      }

      const converted = (amount * fromPrice) / toPrice;
      setResult(converted.toFixed(4));

      setSwapLoading(false);
    }, 1200);
  };

  return (
    <>
      <Loading open={loading || swapLoading} />

      <ErrorModal
        open={errorOpen}
        message={error}
        onClose={() => setErrorOpen(false)}
      />

      <Box sx={{
        position: "fixed", inset: 0, width: "100%",
        height: "100%", backgroundImage: "url('/dreamlike-surrealistic-landscape.jpg')",
        backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",
        display: "flex", alignItems: "center", justifyContent: "center",
      }} >
        <SwapCard
          from={from}
          to={to}
          amount={amount}
          result={result}
          tokens={tokens}
          setFrom={setFrom}
          setTo={setTo}
          setAmount={setAmount}
          onSwap={handleSwap}
        />
      </Box>
    </>
  );
}