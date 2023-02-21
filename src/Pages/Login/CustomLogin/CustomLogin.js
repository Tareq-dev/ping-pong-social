import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.auth";
import SocialLogin from "../SocialLogin/SocialLogin";

function CustomLogin() {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (error) {
    toast.error(error.message);
  }
  if (loading) {
    return <p>loading........</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="py-10">
      <div className="rounded-lg m-4">
        <div className="flex justify-center">
          <h2 className="text-center rounded-lg w-80 bg-pink-500 text-white font-semibold py-2">
            Sign In
          </h2>
        </div>
        <div className="flex justify-center pt-8">
          <form className="flex-col justify-center mx-auto px-4 ">
            <label htmlFor="" className="text-md mx-2">
              Email
            </label>
            <input
              className="border-2 rounded-lg px-4 py-2 block w-80"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="" className="text-md mx-2 block mt-5">
              Password
            </label>
            <input
              className="border-2 rounded-lg px-4 py-2 block w-80"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="my-2">
              <Link to="/reset">Forgot Password ?</Link>
            </p>

            <button
              className="border-2 rounded-lg px-4 py-2 block w-80 mt-5 bg-blue-300 text-black text-xl"
              onClick={() => signInWithEmailAndPassword(email, password)}
            >
              Login
            </button>
          </form>
        </div>
        <p className="text-center mt-5">
          New to Ping Pong?
          <Link className="text-primary px-2" to="/signup">
            Create new account .
          </Link>
        </p>
        <div className="text-center py-5 text-gray-400">
          ________________OR________________
        </div>
        <SocialLogin />
      </div>
    </div>
  );
}

export default CustomLogin;
