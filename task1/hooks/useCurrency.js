import { useEffect, useState } from "react";
import axios from "axios";

export default function useCurrency() {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await axios.get("https://interview.switcheo.com/prices.json");
        const data = res.data;

        const filtered = data.filter((t) => t.currency);
        setTokens(filtered);
      } catch (err) {
        console.error("Error loading tokens:", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { tokens, loading };
}
