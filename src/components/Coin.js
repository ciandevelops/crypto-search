import React from "react";

const Coin = ({ image, name, price, priceChange }) => {
  return (
    <div className="coin-container p-8">
      <div className="coin-row flex justify-between p-4">
        <div className="coin flex">
          <img src={image} alt="crypto logo" className="h-[30px] w-[30px]" />
          <h1 className="text-xl font-bold ml-2">{name}</h1>
        </div>

        <p className="coin-price">${price.toFixed(2)}</p>

        {priceChange < 0 ? (
          <p className="price-change text-[#f00606]">
            {priceChange.toFixed(2)}%
          </p>
        ) : (
          <p className="price-change text-[#11d811]">
            {priceChange.toFixed(2)}%
          </p>
        )}
      </div>
    </div>
  );
};

export default Coin;
