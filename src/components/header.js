function Header(props) {


  return (
    <div className="header">
      <div>
        <h1>Title of the Game</h1>
        <p>Get points by clicking the images below, without clicking the same image twice!</p>
      </div>
      <div>
        <p>Score: {props.score}</p>
        <p>Highscore: {props.highscore}</p>
      </div>
    </div>
  )
}

export default Header;