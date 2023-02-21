import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.auth";
import SocialLogin from "../SocialLogin/SocialLogin";

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  let from = location?.state?.from?.pathname || "/";
  if (error || updateError) {
    toast.error(error.message);
  }
  if (loading || updating) {
    return <p>Loading.........</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const handleCreateUser = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    } else {
      toast.error("You have to match both password");
    }
  };
  return (
    <div className="py-4">
      <div className="p-8 rounded-lg mt-5">
        <div className="flex justify-center">
          <h2 className="text-center w-80 rounded-lg bg-pink-500 text-white font-semibold py-2">
            Register Now
          </h2>
        </div>
        <div className="flex justify-center pt-8">
          <form
            onSubmit={handleCreateUser}
            className="flex-col justify-center mx-auto"
          >
            <label className="text-md mx-2">Name</label>
            <input
              className="border-2 rounded-lg px-4 py-2 block w-80"
              type="name"
              required
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="text-md mx-2 block mt-5">Email</label>
            <input
              className="border-2 rounded-lg px-4 py-2 block w-80"
              type="email"
              required
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="text-md mx-2 block mt-5">Password</label>
            <input
              className="border-2 rounded-lg px-4 py-2 block w-80"
              type="password"
              required
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="text-md mx-2 block mt-5">Confirm Password</label>
            <input
              className="border-2 rounded-lg px-4 py-2 block w-80"
              type="password"
              required
              autoComplete="off"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              type="submit"
              value="Register"
              className="border-2 rounded-lg px-4 py-2 block w-80 mt-5 cursor-pointer bg-blue-300 text-black text-xl"
            />
          </form>
        </div>
        <p className="text-center mt-5">
          Already have an account?
          <Link className="text-primary px-2" to="/login">
            Login
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

export default SignUp;
