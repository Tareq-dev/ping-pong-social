import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.auth";

function SocialLogin() {
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
//   const navigate = useNavigate();

//   const location = useLocation();
//   let from = location.state?.from?.pathname || "/";

//   if (user) {
//     navigate(from, { replace: true });
//   }

  if (loading) {
    return <p>Loading.......</p>;
  }

  return (
    <div>
      <div className="flex justify-center mt-2">
        <button
          onClick={() => signInWithGoogle()}
          className="flex align-center border p-1 rounded-lg border-sky-400"
        >
          <img
            className="w-6"
            src="https://i.ibb.co/5k5bzzG/google.png"
            alt=""
          />
          <p className="mx-2">Google</p>
        </button>
      </div>
    </div>
  );
}

export default SocialLogin;
