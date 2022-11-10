import React from "react";
import moment from "moment";
import { getProfit } from "../utils/getProfit";
import Alert from "@mui/material/Alert";
import { Price } from "./Price";
import { Card } from "@mui/material";

export const StockCount = ({ range, prices }) => {
  const startDate = moment(range.startDate).format("MMMM D, YYYY");
  const endDate = moment(range.endDate).format("MMMM D, YYYY");

  return (
    <div>
      <h2 className="title">
        You chose this range: from <span>{startDate}</span> to{" "}
        <span>{endDate}</span>
      </h2>
      <h3 className="prices__title">Generated prices: </h3>
      <div className="prices">
        {prices.map((price, index) => (
          <Price
            key={index}
            price={price}
            isToBuy={index === getProfit(prices).buyIndex}
            isToSell={index === getProfit(prices).sellIndex}
          />
        ))}
      </div>

      {getProfit(prices).profit <= 0 ? (
        <Alert severity="error">Sorry, no profit for you :(.</Alert>
      ) : (
        <Card className="result">
            <p className="subtitle profit">
              Your profit : <span>{getProfit(prices).profit}</span>
            </p>
            <p className="subtitle day-buy">
              Buy on day: <span>{getProfit(prices).buyIndex + 1}</span>
            </p>
            <p className="subtitle day-sell">
              Sell on day: <span>{getProfit(prices).sellIndex + 1}</span>
            </p>
        </Card>
      )}
    </div>
  );
};
