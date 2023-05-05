export function CapstoneShow(props) {
  const student = {
    first_name: "testfname",
    last_name: "testlname",
    name: "test", //comes from capstones model
    description: "test description", //comes from capstones model
  };

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
          src="https://placeimg.com/640/480/nature"
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <h2 className="card-title">Student: {student.first_name + " " + student.last_name}</h2>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Capstone: {student.name}</li>
          <li className="list-group-item">Description:{student.description}</li>
        </ul>
        <div className="card-body">
          <button href="#" className="btn btn-primary" onClick={props.onClose}>
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
}
