import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Very simple check (no database)
    if (email === "admin@gmail.com" && password === "12345") {
      navigate("/"); // Go to homepage (Hero page)
    } else {
      setError("Incorrect email or password");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="text-center p-8 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg w-80">
        
        <div className="flex justify-center mb-4">
          <Lock size={50} className="text-orange-500" />
        </div>

        <h2 className="text-white text-xl font-semibold mb-4">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded bg-white/20 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded bg-white/20 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
