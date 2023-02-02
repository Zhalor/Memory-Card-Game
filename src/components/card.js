function Card(props) {


  return (
    <div className="card" onClick={() => props.callback(props.score + 1)}>
      <p>{props.letterObj.letter}</p>
      <p>{props.letterObj.desc}</p>
    </div>
  );
}

export default Card;