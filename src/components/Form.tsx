import { useState } from "react";
import Button from "./Button";

function Form() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    alert(`Hi welcome ${name}`);
  };
  const handleClear = () => {
    setName("");
    setDescription("");
    setMessage("");
  };
  return (
    <div>
      <h3>Add a new profile</h3>
      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hi I am: {name}</p>
      <input
        placeholder="Who are you?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <p>What am I currently doing: {description}</p>
      <input
        placeholder="Enter a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>{message}</p>
      <Button handleClick={handleClear} text="Reset" />
      <Button handleClick={handleSubmit} text="Submit your Profile" />
    </div>
  );
}
export default Form;
