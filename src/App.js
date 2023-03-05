import "./App.css";
import Login from "./Pages/Login";
import ViewPatient from "./Pages/ViewPatient";
import { React, useState, useEffect } from "react";
import Account from "./Pages/Account";
import Loading from "./components/Loading";
import AddPatient from "./Pages/AddPatient";
import PatientDetails from "./Pages/PatientDetails";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [patients, setPatients] = useState([]);
  const [userName, setUserName] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [addPatientPressed, setAddPatientPressed] = useState(false);
  const [patientDetailsPressed, setPatientDetailsPressed] = useState(false);
  const [showPatients, setShowPatients] = useState(false);
  const [patientDetails, setPatientDetails] = useState("");
  const [success, setSuccess] = useState(false);
  const [backIsClicked, setBackIsClicked] = useState(false);

  const login = (data) => {
    setIsLoggedIn(true);
    setShowPatients(true);
    setUserId(data.user_id);
    setUserName(data.username);
    fetchPatients(data.user_id);
    setAddPatientPressed(false);
    setSuccess(false);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setShowPatients(false);
    setPatientDetailsPressed(false);
    setSuccess(false);
  };

  const addpatient = () => {
    setAddPatientPressed(true);
    setShowPatients(false);
    setPatientDetailsPressed(false);
    setSuccess(false);
  };

  const goback = () => {
    setAddPatientPressed(false);
    setShowPatients(true);
    setPatientDetailsPressed(false);
    setBackIsClicked(true);
    setSuccess(false);
  };

  // GET DETAILS
  const showDetails = (patientid) => {
    fetch(
      `http://62.74.232.210:4566/healthmonitor/patients?patient_id=${patientid}&details=true`,
      {
        method: "GET",
        headers: {
          API_KEY:
            "7mJ5Ckgu7duD5lTdLGFRkfcHreY8f6CFQqGlcRVjwHjFWjEdIzBNd3HFlozQAcyHFfxngRoRVquxdaYwL6CLLBFJeu6btl5fbRysWPMfF3GU9wj7ZZUexijWkjPs5uc1",
        },

        redirect: "follow",
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setPatientDetails(data[0]);
      })
      .catch((error) => console.log("error", error));

    setAddPatientPressed(false);
    setShowPatients(false);
    setPatientDetailsPressed(true);
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
          login(data);
        }
      })
      .catch((error) => console.log("error", error));
  };

  // Function GET patients
  const fetchPatients = (userid) => {
    setShowLoading(true);
    fetch(
      `http://62.74.232.210:4566/healthmonitor/patients?user_id=${userid}`,
      {
        method: "GET",
        headers: {
          API_KEY:
            "7mJ5Ckgu7duD5lTdLGFRkfcHreY8f6CFQqGlcRVjwHjFWjEdIzBNd3HFlozQAcyHFfxngRoRVquxdaYwL6CLLBFJeu6btl5fbRysWPMfF3GU9wj7ZZUexijWkjPs5uc1",
        },

        redirect: "follow",
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setPatients(data.patients);

        setShowLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  //POST ADD PATIENT

  const addNewPatient = (newdata) => {
    fetch("http://62.74.232.210:4566/healthmonitor/patients", {
      method: "POST",
      headers: {
        API_KEY:
          "7mJ5Ckgu7duD5lTdLGFRkfcHreY8f6CFQqGlcRVjwHjFWjEdIzBNd3HFlozQAcyHFfxngRoRVquxdaYwL6CLLBFJeu6btl5fbRysWPMfF3GU9wj7ZZUexijWkjPs5uc1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newdata),
      redirect: "follow",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Patient Added Succesfuly", data);
        setSuccess(true);
      })
      .catch((error) => console.log("error", error));
  };

  // Update patients
  useEffect(() => {
    fetchPatients(userId);
    setBackIsClicked(false);
  }, [backIsClicked]);

  return (
    <div className="container">
      {isLoggedIn || <Login loginUser={loginUser} />}
      {isLoggedIn && <Account logout={logout} username={userName} />}
      {isLoggedIn && !showLoading && showPatients && (
        <ViewPatient
          patients={patients}
          addpatient={addpatient}
          showDetails={showDetails}
        />
      )}
      {isLoggedIn && addPatientPressed && !showLoading && (
        <AddPatient
          goback={goback}
          addNewPatient={addNewPatient}
          success={success}
        />
      )}
      {isLoggedIn && patientDetailsPressed && !showLoading && (
        <PatientDetails
          patientDetails={patientDetails}
          addpatient={addpatient}
          goback={goback}
        />
      )}

      {showLoading && <Loading />}
    </div>
  );
}

export default App;
