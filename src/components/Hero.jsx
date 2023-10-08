import chart from "../assets/images/bar-chart.svg";
import arrow from "../assets/images/fun-arrow.svg";
import { useState } from "react";

const Hero = () => {
  const [query, setQuery] = useState()
  const handleSearch = (e) => {
    e.preventDefault();
    window.location.assign(`https://catalog.data.gov/dataset?q=${query}`)
  }
  return (
    <div className="hero">
      <div className="container">
        <h1>
          <img src={chart} alt="" />
          <img src={arrow} alt="" />
          Welcome to <span>Data vision</span>
        </h1>
        <p>
          explore and analyze a vast collection of datasets for societal benefit
        </p>
        <h2>262,955</h2>
        <p>datasets available</p>
        <form onSubmit={handleSearch}>
          <input type="text" placeholder="Enter Your Search Term" value={query} onChange={(e) => setQuery(e.target.value)} />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
