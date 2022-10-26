import React from "react";
import moment from "moment";
import { getProfit } from "../utils/getProfit";
import Alert from "@mui/material/Alert";

export const StockCount = ({ range, prices }) => {
  const startDate = moment(range.startDate).format("MMMM D, YYYY");
  const endDate = moment(range.endDate).format("MMMM D, YYYY");

  return (
    <div>
      <h2>
        You chose this range: from {startDate} to {endDate}
      </h2>
      <h3>Generated prices: {prices.join(", ")}</h3>
      {getProfit(prices).profit <= 0 ? (
        <Alert severity="error">Sorry, no profit for you :(.</Alert>
      ) : (
        <>
          <p>your profit : {getProfit(prices).profit}</p>
          <p>buy on day: {getProfit(prices).buyIndex + 1}</p>
          <p>sell on day: {getProfit(prices).sellIndex + 1}</p>
        </>
      )}
    </div>
  );
};
