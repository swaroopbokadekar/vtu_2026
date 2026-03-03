import { useState } from "react";

function MessageInput({ sendMessageToParent }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    sendMessageToParent(message); // Child -> Parent
    setMessage("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Message Input Component</h3>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default MessageInput;