function MessageDisplay({ message }) {
  return (
    <div>
      <h3>Message Display Component</h3>
      <p><b>Message from Parent:</b> {message}</p>
    </div>
  );
}

export default MessageDisplay;