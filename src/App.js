import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/header";
import Card from "./components/card";

function App() {

  const [score, setScore] = useState(0);
  let highscore = 0;

  const [cardDisplays, setCardDisplays] = 
  useState([{letter: "A", desc: "the letter A"},
  {letter: "B", desc: "the letter B"},
  {letter: "C", desc: "the letter C"}, 
  {letter: "D", desc: "the letter D"},
  {letter: "E", desc: "the letter E"},
  {letter: "F", desc: "the letter F"},
  {letter: "G", desc: "the letter G"},
  {letter: "H", desc: "the letter H"},
  {letter: "I", desc: "the letter I"},
  {letter: "J", desc: "the letter J"}]);
    
  
  function shuffleCards() {
    setCardDisplays(cardDisplays.sort(() => {
      return 0.5 - Math.random();
    }));
  }

  const cards = document.querySelectorAll(".card");
  for(let card of cards) {
    card.addEventListener('click', () => {
      shuffleCards();
    });
  }
  

  

  return (
    <div className="container">
      <Header score={score} highscore={highscore} />
      <div className="card-container">
        <Card letterObj={cardDisplays[0]} score={score} callback={setScore}/>
        <Card letterObj={cardDisplays[1]} score={score} callback={setScore}/>
        <Card letterObj={cardDisplays[2]} score={score} callback={setScore}/>
        <Card letterObj={cardDisplays[3]} score={score} callback={setScore}/>
        <Card letterObj={cardDisplays[4]} score={score} callback={setScore}/>
        <Card letterObj={cardDisplays[5]} score={score} callback={setScore}/>
        <Card letterObj={cardDisplays[6]} score={score} callback={setScore}/>
        <Card letterObj={cardDisplays[7]} score={score} callback={setScore}/>
        <Card letterObj={cardDisplays[8]} score={score} callback={setScore}/>
        <Card letterObj={cardDisplays[9]} score={score} callback={setScore}/>

      </div>
    </div>
  );
}

export default App;
