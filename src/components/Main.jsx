import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Paper,
  Button,
} from "@mui/material";
import MobileNo from "./MobileNo";
import "./Main.css";
import OrderList from "./OrderList";
import AddressForm from "./AddressForm";
import TimeSlots from "./TimeSlot";
import FinalSubmit from "./FinalSubmit";
import Modal from "./Modal";

const Main = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [mobileNo, setMobileNo] = React.useState("");
  const [orders, setOrders] = React.useState([]);
  const [openModal, setOpenModal] = React.useState(true);
  const [address, setAddress] = React.useState({
    name: "",
    address1: "",
    address2: "",
    city: "",
    postalCode: "",
  });
  const [timeSlot, setTimeSlot] = React.useState(timeslots[0]);
  const [tip, setTip] = React.useState("");
  const [tipChecked, setTipChecked] = React.useState(false);

  const steps = [
    {
      label: "Enter Mobile Number",
      component: <MobileNo mobileNo={mobileNo} setMobileNo={setMobileNo} />,
    },
    {
      label: "Past Orders",
      component: <OrderList mobileNo = {mobileNo} order={orders} setOrders={setOrders} />,
    },
    {
      label: "Input Address",
      component: <AddressForm address={address} setAddress={setAddress} />,
    },
    {
      label: "Time Slot",
      component: <TimeSlots options = {timeslots} timeSlot={timeSlot} setTimeSlot={setTimeSlot} />,
    },
    {
      label: "Checkout",
      component: <FinalSubmit tipChecked={tipChecked} setTipChecked={setTipChecked} tip={tip} setTip={setTip} />,
    },
  ];

  const handleNext = () => {
      if(activeStep === steps.length - 1){
          setOpenModal(true)
      }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setMobileNo("");
    setOrders([]);
    setTimeSlot(timeslots[0]);
    setTip("");
    setTipChecked(false);
    setAddress({
        name: "",
        address1: "",
        address2: "",
        city: "",
        postalCode: "",
      });
      setOpenModal(true);
  };
  return (
    <Card
      sx={{
        width: "60vw",
        height: "70vh",
        position: "absolute",
        top: "20vh",
        left: "20vw",
      }}
    >
      <CardHeader
        title="Store"
        titleTypographyProps={{ textAlign: "center" }}
      />
      <CardContent sx={{ height: "70%" }}>
        <Stepper
          activeStep={activeStep}
          orientation="horizontal"
          alternativeLabel
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep < steps.length ? (
          steps[activeStep].component
        ) : (
        //   <Paper square elevation={0} sx={{ p: 3 }}>
        //     <Typography>All steps completed - you&apos;re finished</Typography>
        //     <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
        //       Reset
        //     </Button>
        //   </Paper>
        <Modal open = {openModal} setOpen = {setOpenModal} handleReset={handleReset}></Modal>
        )}
      </CardContent>
      <CardActions>
        <Box
          sx={{ width: "100%", display: "flex", flexDirection: "row-reverse" }}
        >
          <div>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 1, mr: 1 }}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Continue"}
            </Button>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mt: 1, mr: 1 }}
            >
              Back
            </Button>
          </div>
        </Box>
      </CardActions>
    </Card>
  );
};

const timeslots = [
    { label: '08:00 AM - 09:00 AM'},
    
    { label: '09:00 AM - 10:00 AM'},
    { label: '10:00 AM - 11:00 AM'},
    { label: '11:00 AM - 12:00 AM'},
    { label: '01:00 PM - 02:00 PM'},
    { label: '02:00 PM - 03:00 PM'},
    { label: '03:00 PM - 04:00 PM'},
    { label: '04:00 PM - 05:00 PM'},
    { label: '05:00 PM - 06:00 PM'},
    { label: '06:00 PM - 07:00 PM'},
    { label: '07:00 PM - 08:00 PM'},
    { label: '08:00 PM - 09:00 PM'},
    { label: '09:00 PM - 10:00 PM'},
  ];
export default Main;
