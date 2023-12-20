import "./CatCard.css";

export default function CatCard(props) {
  let status
  switch(props.cat.status){
    case "SOLD":
    status = "SOLD"
    break;

    case "IN PROCESS":
    status = "IN PROCESS"
    break;

    case "AVAILABLE":
    status = "AVAILABLE"
    break;
  }

  return (
    <div className="catCard-main-container">
      <div className="card-container">
        <img className="card-image" src={props.cat.img} alt={props.cat.name} />

        <p className="card-name">
          <span className="title-bold">Name: </span>
          {props.cat.name}
        </p>

        <p className="card-age">
          <span className="title-bold">Age: </span>
          {props.cat.age}
        </p>

        <p className="card-behavior">
          <span className="title-bold">Behavior: </span>
          {props.cat.behavior}
        </p>

        <p className="card-neutered">
          <span className="title-bold">Neutered: </span>
          {props.cat.isNeutered == true ? <p>Yes</p> : <p>No</p>}{" "}
          {/* ternary operator if else */}
        </p>

        <p className="card-status">
          {status == "SOLD" && <span className="sold">{status}</span>}
          {status == "IN PROCESS" && <span className="process">{status}</span>}
          {status == "AVAILABLE" && <span className="avail">{status}</span>}
        </p>
      </div>
    </div>
  );
}
