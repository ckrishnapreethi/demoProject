import React from "react";
import { useContext } from "react";
import { GlobalContext } from "./ContextAPI";

function ContextContent() {
  const { theme } = useContext(GlobalContext);
  return (
    <div>
      <p style={{ color: theme === "light" ? "blue" : "yellow" }}>
        Context API
      </p>
    </div>
  );
}

export default ContextContent;
