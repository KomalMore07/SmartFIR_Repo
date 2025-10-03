import React, { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("hello/")  // Django backend endpoint
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, []);

  return (
    <div>
      <h1>React + Django Test</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
