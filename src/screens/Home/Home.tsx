import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ol>
        <li>
          <Link to='/card-flip'>Card Flip</Link>
        </li>
      </ol>
    </div>
  );
};

export default Home;
