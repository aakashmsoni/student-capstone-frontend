export function CapstoneShow(props) {
  console.log(props.capstone, "PROPS");
  console.log(props.user, "PROPS_USER");
  return (
    <div>
      {/* <div>
        <h1>Student: {student.firstName + " " + student.lastName}</h1>
        <h2>Capstone: {student.capstone}</h2>
        <p>Description:{student.description}</p>
        <img src={student.image}></img>        
      </div> */}

      <div className="card">
        <img
          className="card-img-top"
          style={{ maxWidth: "500px" }}
          src={props.capstone.screenshot}
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <h2 className="card-title">
            {/* Student: {props.user[props.capstone.id - 1].first_name + " " + props.user[props.capstone.id - 1].last_name} */}
            Capstone: {props.capstone.name}
          </h2>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Student: {props.user[props.capstone.id - 1].first_name + " " + props.user[props.capstone.id - 1].last_name}
          </li>
          <li className="list-group-item">Description:{props.capstone.description}</li>
          <li className="list-group-item">
            Project Link:
            <a href={props.capstone.url}>{props.capstone.url}</a>
          </li>
        </ul>
        <div className="card-body">
          <button href="#" className="btn btn-dark" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
