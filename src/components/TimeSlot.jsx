import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function TimeSlots({options,timeSlot,setTimeSlot}) {
  return (
    <Autocomplete
      disablePortal
      value={timeSlot}
      onChange={(event, newValue) => {
        setTimeSlot(newValue);
      }}
      id="combo-box-demo"
      options={options}
      sx={{ width: "50%",marginLeft:"auto",marginRight:"auto",marginTop:"8%" }}
      renderInput={(params) => <TextField size="small" {...params} label="Time Slots" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

