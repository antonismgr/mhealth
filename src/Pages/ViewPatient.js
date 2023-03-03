import styles from "../Pages/ViewPatient.module.css";

const ViewPatient = ({ patients }) => {
  console.log(patients);
  return (
    <div className={styles.container}>
      {patients.map((x) => (
        <div className={styles.patient} key={x.patient_id}>
          <h3>
            {x.firstname} {x.lastname}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ViewPatient;
