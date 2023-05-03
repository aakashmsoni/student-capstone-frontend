import axios from "axios";
import { useState } from "react";
import { CapstoneIndex } from "./CapstoneIndex";

export function Content() {
  const [capstones, setCapstones] = useState([]);

  const handleIndexCapstones = () => {
    axios.get("http://localhost:3000/capstone_name.json").then((response) => {
      console.log(response);
      setCapstones(response.data);
    }); // <-- INSERT CAP NAME PARAMS
  };
  return (
    <div className="container">
      <CapstoneIndex />
    </div>
  );
}
