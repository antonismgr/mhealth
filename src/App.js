import "./App.css";
import Login from "./Pages/Login";
import AddPatient from "./Pages/AddPatient";
import ViewPatient from "./Pages/ViewPatient";
import PatientDetails from "./Pages/PatientDetails";
import { React, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [patients, setPatients] = useState([]);

  const login = () => {
    setIsLoggedIn(true);
  };

  // POST LOGIN
  const loginUser = (username, password) => {
    fetch("http://62.74.232.210:4566/healthmonitor/users/login", {
      method: "POST",
      headers: {
        API_KEY:
          "7mJ5Ckgu7duD5lTdLGFRkfcHreY8f6CFQqGlcRVjwHjFWjEdIzBNd3HFlozQAcyHFfxngRoRVquxdaYwL6CLLBFJeu6btl5fbRysWPMfF3GU9wj7ZZUexijWkjPs5uc1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      redirect: "follow",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data !== null) {
          login();
          setUserId(data.userid);
          console.log(data);
          fetchPatients(userId);
        }
      })
      .catch((error) => console.log("error", error));
  };

  // Function GET patients
  const fetchPatients = (userid) => {
    fetch(
      `http://62.74.232.210:4566/healthmonitor/patients?user_id=${userid}`,
      {
        method: "GET",
        headers: {
          API_KEY:
            "7mJ5Ckgu7duD5lTdLGFRkfcHreY8f6CFQqGlcRVjwHjFWjEdIzBNd3HFlozQAcyHFfxngRoRVquxdaYwL6CLLBFJeu6btl5fbRysWPMfF3GU9wj7ZZUexijWkjPs5uc1",

          username: "customer_admin",
          password: "healthmonitoring2021",
        },

        redirect: "follow",
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setPatients(data.patients);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="container">
      {isLoggedIn || <Login loginUser={loginUser} />}
      {isLoggedIn && <ViewPatient patients={patients} />}
      {/* <AddPatient />
      <PatientDetails /> */}
    </div>
  );
}

export default App;
