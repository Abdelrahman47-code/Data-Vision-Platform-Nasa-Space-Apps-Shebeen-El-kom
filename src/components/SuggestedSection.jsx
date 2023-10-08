import { Link } from "react-router-dom";
import suggestionImg from "../assets/images/dataset.jpg";
import suggestionImg2 from "../assets/images/data.png";
import suggestionImg3 from "../assets/images/ml_models.jpg";
import { useState } from "react";

const SuggestedSection = () => {
  const suggestions = [
    {
      title: "Explore Different Datasources",
      img: suggestionImg,
      keyword: 'data-sources'
    },
    {
      title: "Discover and Make Data Visualizations",
      img: suggestionImg2,
      keyword: 'data-visualizations'
    },
    {
      title: "Implement ML Models",
      img: suggestionImg3,
      keyword: 'ml-models'
    },
  ];
  return (
    <div className="suggested_section">
      <div className="container">
        <h1 className="section_head">
          <span className="gradientText">Suggested</span> for you
        </h1>
        <div className="cards">
          {suggestions.map((suggestion, index) => {
            return (
              <div className="card" key={index}>
                <Link to={`/${suggestion.keyword}`}>
                  <img src={suggestion.img} alt={suggestion.title} />
                </Link>
                <div className="text">
                  <Link to="">
                    <h2>{suggestion.title}</h2>
                    <button>Explore now</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SuggestedSection;
