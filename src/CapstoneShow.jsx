export function CapstoneShow() {
  const student = {
    firstName: "testfname",
    lastName: "testlname",
    capstone: "test",
    description: "test description",
  };

  return (
    <div>
      <div>
        <h1>Student: {student.firstName + student.lastName}</h1>
        <h2>Capstone: {student.capstone}</h2>
        <p>Description:{student.description}</p>
        {/* <img src={student.image}></img> */}
      </div>
    </div>
  );
}
