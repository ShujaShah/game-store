import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
