import React from "react";
import "../styles/Main.css";

import Cart from "../components/Cart";

function Header() {
  //Game Logic

  return (
    <header>
      <div className="row header">
        <div className="logo">
          <a href="/home">
            <img
              className="bullGaming"
              src="https://cdn.discordapp.com/attachments/901150871927279636/916343508162457650/bull_1.png"
              alt="BullGaming"
              height="100%"
              with="100%"
            />
          </a>
        </div>

        <div className="sections">
          <a className="section" href="/home">
            Home
          </a>
          <a className="section" href="/shop">
            Shop
          </a>
          <a className="section" href="/about">
            About
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
