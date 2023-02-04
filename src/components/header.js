function Header(props) {


  return (
    <div className="header">
      <div className="title">
        <h1>Dragon Ball Z Memory Game</h1>
        <p>Get points by clicking the images below, without clicking the same image twice!</p>
      </div>
      <div className="score">
        <p>Score: {props.score}</p>
        <p>Highscore: {props.highscore}</p>
      </div>
    </div>
  )
}

export default Header;