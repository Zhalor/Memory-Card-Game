import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/header";
import Card from "./components/card";

function App() {

  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

  const [cardDisplays, setCardDisplays] = 
  useState([{desc: "Super Saiyan Goku", src: "./images/gokuSSJ.jpg"},
  {desc: "Super Saiyan Blue Goku", src: "./images/gokuSSJBlue.jpg"},
  {desc: "Ultra Instinct Goku", src: "./images/gokuUltraInstinct.jpg"}, 
  {desc: "D", src: "the desc D"},
  {desc: "E", src: "the desc E"},
  {desc: "F", src: "the desc F"},
  {desc: "G", src: "the desc G"},
  {desc: "H", src: "the desc H"},
  {desc: "I", src: "the desc I"},
  {desc: "J", src: "the desc J"}]);
    
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
