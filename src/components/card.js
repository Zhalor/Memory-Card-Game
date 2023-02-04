

function Card(props) {
  return (
    <div className="card" onClick={() => {
        props.setScore(props.score + 1);
        props.checkDuplicate(props.cardObj.desc);
        }}>
      <img src={props.cardObj.src} alt="" />
      <p>{props.cardObj.desc}</p>
    </div>
  );
}

export default Card;