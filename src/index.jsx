import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { StockCount } from "./components/StockCount";
import { Calendar } from "./components/Calendar";
import { DEFAULT_RANGE } from "./Constants/DateRange";

const App = () => {
  const [dateRange, setDateRange] = useState(DEFAULT_RANGE);
  const [prices, setPrices] = useState([]);

  const handlePrices = (prices) => {
    setPrices(prices);
  };

  const handleDateRange = (range) => {
    setDateRange(range);
  };

  return (
    <div className="container">
      <Calendar
        dateRange={dateRange}
        handlePrices={handlePrices}
        handleDateRange={handleDateRange}
      />
      {prices.length > 0 && <StockCount range={dateRange} prices={prices} />}
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
