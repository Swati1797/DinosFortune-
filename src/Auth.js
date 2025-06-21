import { useState } from 'react';
import { supabase } from './supabaseClient';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
  };

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input type="email" placeholder="Email" className="w-full p-2 border" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="w-full p-2 border mt-2" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="w-full mt-2 bg-blue-500 text-white p-2">Login</button>
      <button onClick={handleSignUp} className="w-full mt-2 bg-green-500 text-white p-2">Sign Up</button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Auth;
