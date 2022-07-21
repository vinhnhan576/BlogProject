import { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const addUser = () => {
    console.log("initilize adding");
    Axios.post("http://localhost:3001/insertuser", {
      name: name,
      age: age,
    })
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div className="info">
        <label>Name</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <button onClick={addUser}>Add user</button>
      </div>
    </div>
  );
}

export default App;
