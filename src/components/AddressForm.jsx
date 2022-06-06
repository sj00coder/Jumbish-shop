import React from "react";
import { TextField, Box, Grid } from "@mui/material";

const AddressForm = ({address, setAddress}) => {
    const handleChange = (prop) => (event) => {
        setAddress({ ...address, [prop]: event.target.value });
      };
  return (
    <Box sx={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <TextField
            sx={{ width: "100%" }}
            required
            value={address.name}
            onChange={handleChange('name')}
            size="small"
            id="name"
            label="Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField
            sx={{ width: "100%" }}
            required
            value={address.address1}
            onChange={handleChange('address1')}
            size="small"
            id="address1"
            label="Address Line 1"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField
            sx={{ width: "100%" }}
            required
            value={address.address2}
            onChange={handleChange('address2')}
            size="small"
            id="address2"
            label="Address Line 2"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <TextField
            sx={{ width: "100%" }}
            required
            value={address.city}
            onChange={handleChange('city')}
            size="small"
            id="city"
            label="Town/City"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <TextField
            sx={{ width: "100%" }}
            required
            value={address.postalCode}
            onChange={handleChange('postalCode')}
            size="small"
            id="postcode"
            label="Postcode"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddressForm;
