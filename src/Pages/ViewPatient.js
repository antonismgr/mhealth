import { React, useState } from "react";

const ViewPatient = () => {
  const [patients, setPatients] = useState([]);
  fetch("http://62.74.232.210:4566/healthmonitor/patients?user_id=18", {
    method: "GET",
    headers: {
      API_KEY:
        "7mJ5Ckgu7duD5lTdLGFRkfcHreY8f6CFQqGlcRVjwHjFWjEdIzBNd3HFlozQAcyHFfxngRoRVquxdaYwL6CLLBFJeu6btl5fbRysWPMfF3GU9wj7ZZUexijWkjPs5uc1",
      username: "customer_admin",
      password: "healthmonitoring2021",
    },
    redirect: "follow",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => setPatients(data.patients))
    .catch((error) => console.log("error", error));
  return (
    <div className="viewpatient">
      {patients.map((x) => (
        <div>
          <h6>
            {x.firstname} {x.lastname}
          </h6>
        </div>
      ))}
    </div>
  );
};

export default ViewPatient;
