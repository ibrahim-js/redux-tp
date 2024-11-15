import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/home";
import Login from "./pages/login";

export default function App() {
  const { user } = useSelector((state) => state);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={user.prenom ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
