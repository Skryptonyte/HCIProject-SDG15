
import { useNavigate } from "react-router-dom"
import React from "react";
import { Box, Typography } from "@mui/material";
const LogoutPage = () => {
    const navigate = useNavigate()
    React.useEffect(() => {
        const timer = setTimeout(() => {
            localStorage.setItem("login","")
            navigate("/login")
            navigate(0)
        }, 5000);
        return () => clearTimeout(timer);
      }, []);
      return (
        <Box>
            <Typography variant="h2">Logging out!</Typography>
        </Box>
      )
}

export default LogoutPage;