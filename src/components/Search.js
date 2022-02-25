import React from "react";

const Search = () => {
  return (
    <div className="search">
      <h1 className="title text-center mb-8 pt-4 text-2xl font-extrabold">
        Crypto Tracker
      </h1>
      <form className="flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="coin-input w-[300px] h-[50px] rounded-lg focus:outline-none text-center"
        />
      </form>
    </div>
  );
};

export default Search;
