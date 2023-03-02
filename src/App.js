import "./App.css";
import Login from "./Pages/Login";
import AddPatient from "./Pages/AddPatient";
import ViewPatient from "./Pages/ViewPatient";
import PatientDetails from "./Pages/PatientDetails";
import { React, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => setIsLoggedIn(true);
  return (
    <div className="container">
      {isLoggedIn || <Login login={login} />}
      {isLoggedIn && <ViewPatient />}
      {/* <AddPatient />
      <PatientDetails /> */}
    </div>
  );
}

export default App;
