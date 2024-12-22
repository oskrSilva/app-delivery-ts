import { Box } from "@mui/material";
import Header from "../../components/Header";
import React from "react";

const user = {
  name:"oscar"
}
const Dashboard: React.FC = () => {
  return (
    <Box>
      <Header />
      {user.name === "oscar" ? <h2>Dashboard</h2> : null}
    </Box>
  );
};


export default Dashboard;
