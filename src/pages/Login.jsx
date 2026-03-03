function Login() {
  return (
    <div className="container" style={{ maxWidth: "400px", backgroundColor: "#fff", padding: "2rem", borderRadius: "10px", boxShadow: "0 3px 10px rgba(0,0,0,0.1)" }}>
      <h1>Login</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}

export default Login;