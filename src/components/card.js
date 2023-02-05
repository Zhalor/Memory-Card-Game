

function Card(props) {
  return (
    <div className="card" onClick={() => {
        props.setScore(props.score + 1);
        props.checkDuplicate(props.character);
        }}>
      <div className="img-container">
        <div className={props.character}></div>
      </div>
      <p>{props.character}</p>
    </div>
  );
}

export default Card;