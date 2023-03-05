import styles from "../Pages/PatientDetails.module.css";
import "animate.css";
import { Button } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PatientDetails = ({ patientDetails, addpatient, goback }) => {
  console.log(patientDetails);
  return (
    <div className="animate__animated animate__fadeIn">
      <div className={styles.navigator}>
        <div className={styles.navbuttons}>
          <Button
            variant="contained"
            size="large"
            onClick={addpatient}
            title="Add Patient"
            startIcon={<PersonAddIcon />}
            color="primary"
          >
            Add Patient
          </Button>
        </div>
        <div className={styles.navbuttons}>
          <Button
            variant="contained"
            size="large"
            onClick={goback}
            title="Back"
            startIcon={<ArrowBackIcon />}
            color="primary"
          />
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>
              {patientDetails.firstname} {patientDetails.lastname}
            </h1>
          </div>
          <div className={styles.allInfo}>
            <div className={styles.section}>
              <div className={styles.head}>
                <h3>Personal Info</h3>
              </div>
              <div className={styles.details}>
                <h5>Age : {patientDetails.age}</h5>
                <h5>Height : {patientDetails.height}</h5>
                <h5>Weight : {patientDetails.weight}</h5>
                <h5>Ethnicity : {patientDetails.ethnicity}</h5>
                <h5>Email : {patientDetails.email}</h5>
                <h5>Phone : {patientDetails.phonenumber}</h5>
                <h5>City : {patientDetails.address_city}</h5>
                <h5>
                  Address : {patientDetails.address_street}{" "}
                  {patientDetails.address_number},{" "}
                  {patientDetails.address_postalcode}
                </h5>
              </div>
            </div>
            {patientDetails.facility !== undefined && (
              <div className={styles.section}>
                <div className={styles.head}>
                  <h3>Facility</h3>
                </div>
                <div className={styles.details}>
                  <h4>{patientDetails.facility.facility_name}</h4>
                  <h5>Address : {patientDetails.facility.facility_address}</h5>
                </div>
              </div>
            )}

            {patientDetails.conditions !== undefined && (
              <div className={styles.section}>
                <div className={styles.head}>
                  <h3>Conditions</h3>
                </div>
                <div className={styles.details}>
                  {patientDetails.conditions.map((x) => {
                    return (
                      <div key={x.condition_id}>
                        <h5>
                          {x.name}/{x.name_el}
                        </h5>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {patientDetails.medicalpersonnel !== undefined && (
              <div className={styles.section}>
                <div className={styles.head}>
                  <h3>Doctors</h3>
                </div>
                <div className={styles.details}>
                  {patientDetails.medicalpersonnel.map((x) => {
                    return (
                      <div className={styles.doctor} key={x.medicalperson_id}>
                        <div className={styles.dochead}>
                          <h4>
                            {x.firstname} {x.lastname} -{" "}
                            <span className={styles.prof}>{x.specialty}</span>
                          </h4>

                          <span className={styles.mail}>{x.email}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
