import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Typography, Popover } from "@mui/material";
import getOrders from "../utils/api";

export default function OrderList({ mobileNo, order, setOrders }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [ordersList, setOrdersList] = React.useState([]);

  React.useEffect(() => {
    const temp = getOrders(mobileNo);
    setOrdersList(temp);
  }, [mobileNo]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleToggle = (value) => () => {
    const currentIndex = order.indexOf(value.id);
    const newChecked = [...order];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setOrders(newChecked);
  };
  {
    // {ordersList.length > 0 ? 
    
    return (

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {ordersList.map((value) => {
          const labelId = `checkbox-list-label-${value.id}`;

          return (
            <ListItem
              key={value.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="comments"
                  onClick={handleClick}
                >
                  <InfoIcon />
                  <Popover
                    id={value.id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "center",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Typography sx={{ p: 2 }}>
                      <List>
                          {value.items.map((item,i) => {
                              <ListItem key = {i}>
                                  <ListItemText primary={item.item} secondary={item.quantity}>

                                  </ListItemText>
                              </ListItem>
                          })}
                      </List>
                    </Typography>
                  </Popover>
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={order.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={`${value.id}`}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.secondry"
                      >
                        {new Date(value.timestamp).toLocaleDateString()}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    ) 
// : (
//       "There is no orders for this mobile No. Please try 1234567890"
//     );
//   }
}
}
