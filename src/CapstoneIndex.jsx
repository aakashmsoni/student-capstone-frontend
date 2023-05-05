export function CapstoneIndex(props) {
  console.log(props);
  return (
    <div id="capstone-index">
      <h1>Capstone Catalog</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                src="https://asia.olympus-imaging.com/content/000107506.jpg"
                className="card-img-top"
                alt="..."
                width={350}
              />
              <div className="card-body">
                <h5 className="card-title">Capstone title</h5>
                <p className="card-text">Capstone descrip/student name</p>
                <button className="btn btn-primary" onClick={() => props.onShowCapstone()}>
                  More Info
                </button>
              </div>
            </div>
            <div className="card">
              <img
                src="https://asia.olympus-imaging.com/content/000107506.jpg"
                className="card-img-top"
                alt="..."
                width={350}
              />
              <div className="card-body">
                <h5 className="card-title">Capstone title</h5>
                <p className="card-text">Capstone descrip/student name</p>
                <button className="btn btn-primary">More Info</button>
              </div>
            </div>
            <div className="card">
              <img
                src="https://asia.olympus-imaging.com/content/000107506.jpg"
                className="card-img-top"
                alt="..."
                width={350}
              />
              <div className="card-body">
                <h5 className="card-title">Capstone title</h5>
                <p className="card-text">Capstone descrip/student name</p>
                <button onClick={() => props.onShowCapstone("capstone")} className="btn btn-primary">
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
