import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:8000")
        .then((res) => res.json())  
        .then((data) => setMessage(data.message)) 
        .catch((err) => console.error("Error fetching message:", err));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1>{message}</h1>;
}

export default App;
