import { Link, useHistory } from "react-router-dom";

import React, { useState } from "react";
import NavCSS from "./Nav.module.css";

export default function NavLinks() {
  const [inputSearch, setInputSearch] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    if (inputSearch.length > 0) {
      history.push(`/results?q=${inputSearch}`);
    }
  };

  return (
    <div>
      <div className={NavCSS.menuIcon}>
        <ul>
          <li className={NavCSS.menuBtn}>
            <Link className={NavCSS.menuBtn} to="/">
              Home
            </Link>
          </li>
        </ul>

        <div className={NavCSS.form}>
          <input
            className={NavCSS.inputSearch}
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setInputSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
          <button
            onClick={() => handleSubmit()}
            className={NavCSS.btnSearch}
            type="submit"
            name="search"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
