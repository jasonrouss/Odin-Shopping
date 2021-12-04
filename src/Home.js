import React from "react";
import "./styles/Main.css";
function Home() {
  return (
    <div>
      <div className="jC">
        <div className="welcome">
          Welcome to our shop , we sell digital games perfect for playing solo
          or co-op , grab a friend and game on !!
        </div>
      </div>
      <div className="jC">
        <img
          className="gamingBuddies"
          src="https://cdn.discordapp.com/attachments/901150871927279636/916364802006339644/gamingBuddies.png"
          alt="gaming buddies"
          width="60%"
        />
      </div>
      <div className="jC">
        <a href="/shop">
          <button className="goShop">Go Shopping</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
