import React, { useState, useEffect } from "react";
import "animate.css";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "../Pages/AddPatient.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import DropDown from "../components/dropDown";

const theme = createTheme();

export default function AddPatient({ goback, addNewPatient, success }) {
  const newPatient = {
    firstname: "",
    lastname: "",
    email: "",
    facility_id: "",
    address_street: "",
    address_number: "",
    address_city: "",
    address_postalcode: "",
    phonenumber: "",
    sex: "",
    age: "",
  };
  const [selectedFacility, setSelectedFacility] = useState("");
  const [allFac, setAllFac] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    newPatient.facility_id = selectedFacility;
    console.log(newPatient);
    addNewPatient(newPatient);
  };

  const getAllFacilities = () => {
    fetch(`http://62.74.232.210:4566/healthmonitor/facilities`, {
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
      .then((data) => {
        setAllFac(data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getAllFacilities();
  }, []);

  const onValueChange = (data, type) => {
    newPatient[type] = data.value;
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <div className={styles.navigator}>
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
      <div className={styles.container}>
        <div className={styles.form}>
          {success && <h1>Patient Added Succesfuly</h1>}
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h5">
                  Add Patient
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      {allFac && (
                        <DropDown
                          allFac={allFac}
                          setSelectedFacility={setSelectedFacility}
                        />
                      )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstname"
                        fullWidth
                        onChange={(e) =>
                          onValueChange(e.currentTarget, "firstname")
                        }
                        id="firstname"
                        label="First Name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        onChange={(e) =>
                          onValueChange(e.currentTarget, "lastname")
                        }
                        id="lastname"
                        label="Last Name"
                        name="lastname"
                        autoComplete="family-name"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        onChange={(e) =>
                          onValueChange(e.currentTarget, "email")
                        }
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        onChange={(e) =>
                          onValueChange(e.currentTarget, "address_street")
                        }
                        id="address_street"
                        label="Street"
                        name="address_street"
                        autoComplete="address_street"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        onChange={(e) =>
                          onValueChange(e.currentTarget, "address_number")
                        }
                        id="address_number"
                        label="Number"
                        name="address_number"
                        autoComplete="address_number"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        onChange={(e) =>
                          onValueChange(e.currentTarget, "address_city")
                        }
                        id="address_city"
                        label="City"
                        name="address_city"
                        autoComplete="address_city"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        onChange={(e) =>
                          onValueChange(e.currentTarget, "address_postalcode")
                        }
                        id="address_postalcode"
                        label="Postal Code"
                        name="address_postalcode"
                        autoComplete="address_postalcode"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        onChange={(e) => onValueChange(e.currentTarget, "age")}
                        id="age"
                        label="Age"
                        name="age"
                        autoComplete="birthdate"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        onChange={(e) => onValueChange(e.currentTarget, "sex")}
                        id="sex"
                        label="Sex"
                        name="sex"
                        autoComplete="sex"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        onChange={(e) =>
                          onValueChange(e.currentTarget, "phonenumber")
                        }
                        id="phonenumber"
                        label="Phone Number"
                        name="phonenumber"
                        autoComplete="phonenumber"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Add
                  </Button>
                  <Grid container justifyContent="flex-end"></Grid>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
