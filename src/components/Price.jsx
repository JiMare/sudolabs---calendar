import React from 'react'

export const Price = ({price, isToBuy, isToSell}) => {
  return <div className={isToBuy ? "price price--buy" : isToSell ? "price price--sell" : "price"}>{price}</div>;
}
