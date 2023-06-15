import React from "react";
import { useState } from "react";
import Article from "../components/article";
// import BlogList from "../../components/BlogList/BlogList";
import BlogList from "../components/BlogList/BlogList";
import { useBlogsContext } from "../../context/blogsContext";

const Home = () => {
  const { blogs, setSearchTerm, searchTerm, fetchBlogsFromSearch } = useBlogsContext();

  const [erroMsg, setErrorMsg] = useState("");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    if (e.target.value.replace(/[^\w\s]/gi, "").length !== 0) {
      setSearchTerm(e.target.value);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid search term ...");
    }
  };

  const handleSearchResult = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    fetchBlogsFromSearch(searchTerm);
  };

  return (
    <div className="flex flex-row border border-black">
      {/* Welcome to the Home Page! */}
      <div className="border h-full w-[85%] pt-12">
        {/* <Article /> */}
        {<BlogList blogs={blogs} />}
      </div>
      <div className="border">for category</div>
    </div>
  );
};

export default Home;
