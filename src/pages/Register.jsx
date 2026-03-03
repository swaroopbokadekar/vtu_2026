function Register() {
  return (
    <div className="container" style={{ maxWidth: "400px", backgroundColor: "#fff", padding: "2rem", borderRadius: "10px", boxShadow: "0 3px 10px rgba(0,0,0,0.1)" }}>
      <h1>Register</h1>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Register</button>
    </div>
  );
}

export default Register;