import React, { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  
  return (
    <div>
      <h1>Recipe Search</h1>
      <input
        type="search"
        placeholder="Search a recipe"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>
        {/* <Card /> */}
      </div>
    </div>
  );
};

export default Home;
