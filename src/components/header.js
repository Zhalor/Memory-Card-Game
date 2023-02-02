function Header(props) {


  return (
    <div className="header">
      <div>
        <h1>Title of the Game</h1>
        <p>Some instructions on how to play. Just click around!</p>
      </div>
      <div>
        <p>Score: {props.score}</p>
        <p>Highscore: {props.highscore}</p>
      </div>
    </div>
  )
}

export default Header;