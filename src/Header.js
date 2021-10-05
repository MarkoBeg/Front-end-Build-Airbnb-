import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt="logo"
        />
      </Link>
      <div className="header-mid">
        <input type="text" placeholder="Search" />
        <SearchIcon></SearchIcon>
      </div>
      <div className="header-right">
        <p>Become a host</p>
        <LanguageIcon></LanguageIcon>
        <ExpandMoreIcon></ExpandMoreIcon>
        <Avatar></Avatar>
      </div>
    </div>
  );
}
