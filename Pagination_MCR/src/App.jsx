import { useState } from "react";

 const App = () => {
  const [players, setPlayers] = useState(["Virat", "Rohit", "Dhoni"]);

  const removePlayer = () => {
    setPlayers(players.slice(1)); // Pehla player hata diya (Virat)
  };

  return (
    <div>
      <button onClick={removePlayer}>Remove First Player</button>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            <input defaultValue={player} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
