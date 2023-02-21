import { Route, Routes } from "react-router-dom";
import "./App.css";
import EditProfile from "./components/EditProfile";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import CustomLogin from "./Pages/Login/CustomLogin/CustomLogin";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp/SignUp";
import Media from "./Pages/Media/Media";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/media"
          element={
            <RequireAuth>
              <Media />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<CustomLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/edit"
          element={
            <RequireAuth>
              <EditProfile />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
