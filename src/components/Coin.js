import React from "react";

const Coin = ({
  image,
  name,
  price,
  priceChange,
  symbol,
  volume,
  marketCap,
}) => {
  return (
    <div className="coin-container p-8">
      <div className="coin-row flex justify-between text-xl font-black underline">
        <h1>Name</h1>
        <h1>Price</h1>
        <h1 className="hidden md:flex">Volume</h1>
        <h1>Change</h1>
        <h1 className="hidden md:flex">Marketcap</h1>
      </div>
      <div className="coin-row flex justify-between p-4">
        <div className="coin flex">
          <img src={image} alt="crypto logo" className="h-[30px] w-[30px]" />
          <p className="text-xl font-bold ml-2">{name}</p>
          <p className="coin-symbol hidden md:flex">{symbol}</p>
        </div>

        <p className="coin-price">${price.toFixed(2)}</p>

        <p className="coin-volume hidden md:flex">{volume.toLocaleString()}</p>

        {priceChange < 0 ? (
          <p className="price-change text-[#f00606]">
            {priceChange.toFixed(2)}%
          </p>
        ) : (
          <p className="price-change text-[#11d811]">
            {priceChange.toFixed(2)}%
          </p>
        )}

        <p className="coin-marketcap hidden md:flex">
          {marketCap.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Coin;
