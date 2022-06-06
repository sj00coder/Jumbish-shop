import React from "react";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import {TextField, Box } from "@mui/material";


const MobileNo = ({mobileNo,setMobileNo}) => {
    
    
    function onChangeHandler(e){
        setMobileNo(e.target.value)
    }
  return (
    
        <Box sx={{display:"flex",justifyContent:"space-around",alignContent:"space-around",alignItems:"center"}}>
          <TextField
            required
            label="Mobile Number"
            size="small"
            value={mobileNo}
            onChange={onChangeHandler}
            
          />
        </Box>
      
  );
};

export default MobileNo;
