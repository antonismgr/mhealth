import { React, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDown({ allFac, setSelectedFacility }) {
  const [facility, setFacility] = useState("");

  const handleChange = (event) => {
    setSelectedFacility(event.target.value);

    setFacility(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Facility</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={facility}
          label="facility"
          onChange={handleChange}
        >
          {allFac?.map((item) => {
            return (
              <MenuItem key={item.facility_id} value={item.facility_id}>
                {item.facility_name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
