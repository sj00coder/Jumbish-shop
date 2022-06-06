import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {FormControl,InputLabel,OutlinedInput,InputAdornment} from '@mui/material'

export default function FinalSubmit({tipChecked,setTipChecked,tip, setTip}) {

    const handleChange = (event) => {
      setTipChecked(event.target.checked);
    };
  

  return (
    <FormGroup sx= {{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
      <FormControlLabel control={<Checkbox checked={tipChecked} value={tipChecked} onChange={handleChange}/>} label="Tip to delivery Person" />
      <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            disabled={!tipChecked}
            id="outlined-adornment-amount"
            value={tip}
            onChange={(event) => {
                setTip(event.target.value)
            }}
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            label="Amount"
          />
          </FormControl>
    </FormGroup>
  );
}
