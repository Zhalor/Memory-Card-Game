

function Card(props) {
  return (
    <div className="card" onClick={() => {
        props.setScore(props.score + 1);
        props.checkDuplicate(props.cardObj.desc);
        }}>
      <p>{props.cardObj.desc}</p>
      <img src={props.cardObj.src} alt="" />
    </div>
  );
}

export default Card;