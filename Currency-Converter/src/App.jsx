import { useState } from "react";
import InputBox from "./components";
import useCurrencyInfo from "./hooks"

function App() {
  const [amount , setAmount] = useState(0);
  const [form , setFrom] = useState("usd");
  const [to ,setTo] = useState("pkr");
  const [convertedAmount , setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  
  return (
    <>
    </>
  );
}

export default App;
