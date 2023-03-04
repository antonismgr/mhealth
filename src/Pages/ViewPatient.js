import styles from "../Pages/ViewPatient.module.css";
import "animate.css";
import { Button } from "@mui/material";

const ViewPatient = ({ patients, addpatient }) => {
  console.log(patients);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className={styles.addPatient}>
        <Button variant="contained" onClick={addpatient}>
          Add Patient
        </Button>
      </div>
      <div className={styles.grid}>
        <div className={styles.container}>
          {patients.map((x) => {
            return (
              <div className={styles.patient} key={x.patient_id}>
                <div>
                  <h3>
                    {x.firstname} {x.lastname}{" "}
                    <span className={styles.sex}>{x.sex}</span>
                  </h3>
                </div>

                <div className={styles.condition}>
                  {x.sys_blood_pressure !== undefined &&
                    x.dia_blood_pressure !== undefined && (
                      <h5>
                        Blood Pressure : {x.sys_blood_pressure}/
                        {x.dia_blood_pressure}
                      </h5>
                    )}

                  {x.heart_rate !== undefined && (
                    <h5>Heart Rate : {x.heart_rate} bpm</h5>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ViewPatient;
