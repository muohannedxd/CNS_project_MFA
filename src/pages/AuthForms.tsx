import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";

export default function AuthForms() {

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault()
    setValue(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center my-24 sm:mx-0 md:mx-16 lg:mx-60 xl:mx-96">
      <Box sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: 2, fontFamily: 'Oswald' }} >
        <Tabs value={value} onChange={handleChange}
          centered indicatorColor="secondary" variant="fullWidth"
          textColor='inherit' className="text-darkViolet">
          <Tab label="Register" style={{fontFamily: 'Oswald'}} />
          <Tab label="Login" style={{fontFamily: 'Oswald'}} />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <Signup />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Login />
        </CustomTabPanel>
      </Box>
    </div>
  )
}
