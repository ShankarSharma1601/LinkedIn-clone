import React from "react";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <i className="widgets__icon fa-solid fa-circle"></i>
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <i class="fa-solid fa-circle-info"></i>
      </div>
      {newsArticle("Shankar Sharma", "Top News - 999 readers")}
      {newsArticle("CoronaVirus: UK updates", "Top News - 843 readers")}
      {newsArticle("Tesla hits new hights", "Car & auto - 400 readers")}
      {newsArticle("Bitcoin Breaks $22k", "Crypto - 9990 readers")}
      {newsArticle("Is Redux too good", "Code - 123 readers")}
    </div>
  );
}

export default Widgets;
