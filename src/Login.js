import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import "./index.css"; // Import CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    supabase.auth.onAuthStateChange((_event, session) => setSession(session));
  }, []);

  const handleSignUp = async () => {
    setError("");
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
  };

  const handleLogin = async () => {
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
  };

  const handleOAuthLogin = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) setError(error.message);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {session ? (
          <div className="welcome-section">
            <h2>Welcome, {session.user.email}!</h2>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        ) : (
          <div>
            <h2 className="login-title">Casino Login</h2>
            {error && <p className="error-text">{error}</p>}
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} className="login-btn">Login</button>
            <button onClick={handleSignUp} className="signup-btn">Sign Up</button>
            <div className="oauth-buttons">
              <button onClick={() => handleOAuthLogin("google")} className="google-btn">
                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="icon" />
                Login with Google
              </button>
              <button onClick={() => handleOAuthLogin("facebook")} className="facebook-btn">
                <img src="https://www.svgrepo.com/show/157810/facebook.svg" alt="Facebook" className="icon" />
                Login with Facebook
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
