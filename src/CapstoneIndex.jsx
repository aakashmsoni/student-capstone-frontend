import "./CapstoneIndex.scoped.scss";

export function CapstoneIndex(props) {
  console.log(props);
  return (
    <div id="capstone-index">
      <h1>Capstone Catalog</h1>
      <div className="container">
        <div className="row">
          {/* <div className="col"> */}
          {props.capstones.map(user => (
            <div key={user.id} className="capstones col mb-3">
              <div className="card h-100">
                <h3 className="card-header text-center">{user.capstones[0].name}</h3>
                <p className="text-center">
                  <small className="text-body-secondary">
                    By: {user.first_name} {user.last_name}
                  </small>
                </p>
                <img src={user.capstones[0].screenshot} className="card-img-top mx-auto mt-1" />
                <button
                  type="button"
                  onClick={() => props.onShowCapstone(user.capstones[0])}
                  className="btn btn-secondary mx-auto col-4 mb-1 mt-1"
                >
                  View More
                </button>
              </div>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
