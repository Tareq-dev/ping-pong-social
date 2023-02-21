import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.auth";

const useProfile = () => {
    const [profile, setProfile] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;
  
    useEffect(() => {
      fetch(`http://localhost:5000/profile/${email}`)
        .then((res) => res.json())
        .then((data) => setProfile(data));
    }, [email]);

  return [ profile];
};
export default useProfile;
