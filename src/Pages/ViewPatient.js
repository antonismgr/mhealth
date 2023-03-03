import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "patient_id", headerName: "ID", width: 90 },
  {
    field: "firstname",
    headerName: "First name",
    width: 150,
    editable: false,
  },
  {
    field: "lastname",
    headerName: "Last name",
    width: 150,
    editable: false,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "address_city",
    headerName: "City",
    width: 150,
    editable: false,
  },
  {
    field: "address",
    headerName: "Address",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.address_street || ""}  ${params.row.address_number || ""}`,
  },
  {
    field: "dia_blood_pressure",
    headerName: "Blood Pressure",
    type: "number",
    width: 110,
    editable: false,
  },
];

export default function ViewPatient({ patients }) {
  console.log(patients);
  console.log(columns);
  return (
    <Box sx={{ height: 670, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row.patient_id}
        rows={patients}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

// const ViewPatient = ({ patients }) => {
//   console.log(patients);
//   return (
//     <div className="viewpatient">
//       {patients.map((x) => (
//         <div key={x.patient_id}>
//           <h6>
//             {x.firstname} {x.lastname}
//           </h6>
//         </div>
//       ))}
//     </div>
//   );
// };
