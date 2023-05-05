import axios from "axios";
import { useEffect, useState } from "react";
import { CapstoneIndex } from "./CapstoneIndex";
import { CapstoneShow } from "./CapstoneShow";
import { Modal } from "./Modal";

export function Content() {
  const [capstones, setCapstones] = useState([]);
  const [isCapstoneShowVisible, setIsCapstoneShowVisible] = useState(false);
  const [currentCapstone, setCurrentCapstone] = useState(["test"]);

  const handleIndexCapstones = () => {
    axios.get("http://localhost:3000/capstone_name.json").then(response => {
      console.log(response);
      setCapstones(response.data);
    }); // <-- INSERT CAP NAME PARAMS
  };

  const handleShowCapstone = () => {
    setIsCapstoneShowVisible(true);
    // setCurrentCapstone(capstone);
  };

  const handleClose = () => {
    setIsCapstoneShowVisible(false);
  };

  useEffect(handleIndexCapstones, []);
  return (
    <div className="container">
      <CapstoneIndex capstones={capstones} onShowCapstone={handleShowCapstone} />

      <Modal show={isCapstoneShowVisible}>
        <CapstoneShow capstone={currentCapstone} onClose={handleClose} />
      </Modal>
    </div>
  );
}
