import axios from "axios";
import { useEffect, useState } from "react";
import { CapstoneIndex } from "./CapstoneIndex";
import { CapstoneShow } from "./CapstoneShow";

export function Content() {
  const [capstones, setCapstones] = useState([]);

  const handleIndexCapstones = () => {
    axios.get("http://localhost:3000/capstone_name.json").then((response) => {
      console.log(response);
      setCapstones(response.data);
    }); // <-- INSERT CAP NAME PARAMS
  };

  useEffect(handleIndexCapstones, []);
  return (
    <div className="container">
      <CapstoneIndex capstones={capstones} />
      <CapstoneShow />
    </div>
  );
}
