import React, { useState } from "react";
import { RiSearchEyeLine } from "react-icons/ri";

export default function Header() {
  const [searchInput, setSearch] = useState<string>("");
  const [finalSearchTerm, setFinalSearchTerm] = useState<string>(searchInput);
  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    setFinalSearchTerm(searchInput);
  };
  return (
    <div className="home-header">
      <div className="search-bar">
        <input
          id="name"
          type="text"
          value={searchInput}
          placeholder={"Find a quote now"}
          onChange={handleTyping}
          aria-label="quote-input"
          data-testid={"search-bar"} // slight controversy on using these
        ></input>
        <RiSearchEyeLine onClick={handleSearch} />
      </div>
    </div>
  );
}
