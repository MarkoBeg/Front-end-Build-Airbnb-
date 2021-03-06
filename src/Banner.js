import React, { useState } from "react";
import "./Banner.css";
import Button from "@mui/material/Button";
import Search from "./Search";
import { useHistory } from "react-router-dom";

export default function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  const history = useHistory();

  return (
    <div className="banner">
      <div className="banner-search">
        {showSearch && <Search></Search>}
        <button
          className="btn-search"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Hide" : "Search Dates"}
        </button>
      </div>
      <div className="banner-info">
        <h1>Get out and stretch your imagination</h1>
        <h5>Plan a diffrent kind of getway to uncover hidden gems near you</h5>
        <Button variant="outlined" onClick={() => history.push("/search")}>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}
