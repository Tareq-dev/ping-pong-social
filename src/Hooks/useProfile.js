import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.auth";

const useProfile = () => {
  const [profile, setProfile] = useState([]);
  const [user] = useAuthState(auth);
  const email = user?.email;

  useEffect(() => {
    fetch(`https://ping-pong-social.onrender.com/profile/${email}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [email]);

  return [profile];
};
export default useProfile;
