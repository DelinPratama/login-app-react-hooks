import React from "react";
import { useState } from "react";
import Article from "../components/article";

const Home = () => {
  return (
    <div className="flex flex-row border border-black">
      <div className="border h-full w-[85%] pt-12">
        <Article />
      </div>
      <div className="border">for category</div>
    </div>
  );
};

export default Home;
