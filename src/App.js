import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/header";
import Card from "./components/card";

function App() {

  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

  const [characters, setCharacters] = 
  useState(['Goku', 'Vegeta', 'Gohan', 'Trunks', 'Frieza',
            'Krillin', 'Buu', 'Tien', 'Yamcha', 'Piccolo']);
    
  useEffect(() => {
    shuffleCards();
  });
  
  function shuffleCards() {
    setCharacters(characters.sort(() => {
      return 0.5 - Math.random();
    }));
  }

  function checkDuplicate(name) {
    if(selectedCards.includes(name)) {
      if(score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setSelectedCards(selectedCards => []);
    } else {
      setSelectedCards(selectedCards.concat(name));
    }
  }

  return (
    <div className="container">
      <Header score={score} highscore ={highScore}/>
      <div className="card-container">
        <Card character={characters[0]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>
        <Card character={characters[1]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>
        <Card character={characters[2]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>
        <Card character={characters[3]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>
        <Card character={characters[4]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>
        <Card character={characters[5]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>
        <Card character={characters[6]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>
        <Card character={characters[7]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>
        <Card character={characters[8]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>
        <Card character={characters[9]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>

      </div>
    </div>
  );
}

export default App;
