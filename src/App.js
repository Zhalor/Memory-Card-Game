import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/header";
import Card from "./components/card";

function App() {

  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

  const [cardDisplays, setCardDisplays] = 
  useState([{desc: "Goku", src: "./images/goku.png"},
  {desc: "Vegeta", src: "./images/vegeta.png"},
  {desc: "Krillin", src: "./images/krillin.png"}, 
  {desc: "Gohan", src: "./images/gohan.png"},
  {desc: "Trunks", src: "./images/trunks.png"},
  {desc: "Buu", src: "./images/buu.png"},
  {desc: "Tien", src: "./images/tien.png"},
  {desc: "Yamcha", src: "./images/yamcha.png"},
  {desc: "Frieza", src: "./images/frieza.png"},
  {desc: "Piccolo", src: "./images/piccolo.png"}]);
    
  useEffect(() => {
    shuffleCards();
  });
  
  function shuffleCards() {
    setCardDisplays(cardDisplays.sort(() => {
      return 0.5 - Math.random();
    }));
  }

  function checkDuplicate(desc) {
    if(selectedCards.includes(desc)) {
      if(score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setSelectedCards(selectedCards => []);
    } else {
      setSelectedCards(selectedCards.concat(desc));
    }
  }

  return (
    <div className="container">
      <Header score={score} highscore ={highScore}/>
      <div className="card-container">
        <Card cardObj={cardDisplays[0]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>
        <Card cardObj={cardDisplays[1]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>
        <Card cardObj={cardDisplays[2]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>
        <Card cardObj={cardDisplays[3]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>
        <Card cardObj={cardDisplays[4]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>
        <Card cardObj={cardDisplays[5]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>
        <Card cardObj={cardDisplays[6]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>
        <Card cardObj={cardDisplays[7]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>
        <Card cardObj={cardDisplays[8]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>
        <Card cardObj={cardDisplays[9]} score={score} setScore={setScore} checkDuplicate={checkDuplicate}/>

      </div>
    </div>
  );
}

export default App;
