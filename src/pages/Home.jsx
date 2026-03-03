function Home() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>Welcome to Stud_Mngt! Manage students, messages, and more.</p>

      <div style={{ marginTop: "2rem" }}>
        <h2>Send a Message</h2>
        <input type="text" placeholder="Enter message" />
        <button>Send</button>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h2>Messages</h2>
        <div style={{ backgroundColor: "#fff", padding: "1rem", borderRadius: "5px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          Message from Par
        </div>
      </div>
    </div>
  );
}

export default Home;