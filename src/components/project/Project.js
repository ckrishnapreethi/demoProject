import { useState } from "react";
import Modal from "../Modal";
import "./styles.css";
// import {Modal} from "Modal.js"

export default function App() {
  const [time, setTime] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const handleTimeclick = () => {
    const timeNow = new Date().toLocaleString();
    setTime(timeNow);
    handleButtonClick(time);
  };
  const handleButtonClick = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Clari5 </h1>
        <h1> Clari5Intel Hub</h1>
        <button onClick={handleTimeclick} style={{ height: "20px" }}>
          {" "}
          SUPERUSER1{" "}
        </button>
      </div>
      <div
        style={{
          border: "1px solid",
          width: "300px",
          margin: "50px",
          alignItems: "center",
        }}
      >
        <h2> NCRP integartion </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
            gap: "5px",
            justifyItems: "center",
          }}
        >
          <button
            onClick={() => handleButtonClick("white list management clicked")}
          >
            white list management(coming soon){" "}
          </button>
          <button onClick={() => handleButtonClick("uspect Registery clicked")}>
            suspect Registery(coming soon){" "}
          </button>
          <button onClick={() => handleButtonClick("Email Templates clicked")}>
            Email Templates(coming soon){" "}
          </button>
          <button
            onClick={() => handleButtonClick("white list management clicked")}
          >
            white list management(coming soon){" "}
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        content={modalContent}
      />
    </div>
  );
}
