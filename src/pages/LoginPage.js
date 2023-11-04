
import { Paper, TextField, Button, Box, Typography, Link } from "@mui/material"
import Stack from '@mui/material/Stack';
import React from "react";
import "@fontsource/dancing-script"
import "@fontsource/rubik"
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const formRef = React.useRef();
    const [email, setEmail] = React.useState("")
    const [emailHelper, setEmailHelper] = React.useState("")

    const [password, setPassword] = React.useState("")
    const [passwordHelper, setPasswordHelper] = React.useState("")
    const navigate = useNavigate()
    const onSubmit = () => {
        var pass = 1
        if (email == ""){
            setEmailHelper("Please fill your email")
            pass = 0
        }
        if (password == ""){
            setPasswordHelper("Please fill your password")
            pass = 0
        }
        if (!pass){
            return
        }
        navigate("/")
        return 
    }
    return (
        <Box>
            <Paper sx={{marginX: "25%", marginY: "5%", paddingX: "4%", paddingY: "2%"}} elevation={10}>
                <form>
            <Box sx={{display: 'flex' ,width: "100%"}}>
                    <Typography fontFamily="Dancing Script" variant="h1" sx={{justifyContent: true, flex: 1, textAlign: "center"}}>PoachThePoachers</Typography>
                </Box>
                <Box sx={{display: 'flex' ,width: "100%"}}>
                    <Typography variant="h3" sx={{justifyContent: true, flex: 1, textAlign: "center"}}>Welcome back</Typography>
                </Box>
                <Box sx={{display: 'flex' ,width: "100%"}}>
                    <TextField sx={{justifyContent: true, flex: 1, marginY: "10px"}}
                        label="Username" type="text" helperText={emailHelper} error={emailHelper != ""} 
                        value={email}
                        onChange={(event) => {
                            setEmailHelper("")
                            setEmail(event.target.value);
                          }}/>
                </Box>
                <Box sx={{display: 'flex' ,width: "100%"}}>
                    <TextField sx={{justifyContent: true, flex: 1, marginY: "10px"}}
                        label="Password" type="password" helperText={passwordHelper} error={passwordHelper != ""}
                        value={password}
                        onChange={(event) => {
                            setPasswordHelper("")
                            setPassword(event.target.value);
                          }}/>
                </Box>
                <Box sx={{display: 'flex' ,width: "100%"}}>
                    <Button onClick={onSubmit} sx={{justifyContent: true, flex: 1, marginY: "10px", marginX: "15%"}}>Login</Button>
                </Box>
                <Box sx={{display: 'flex' ,width: "100%"}}>
                    <Link href="/register">Don't have an account? Register now!</Link>
                </Box>
                </form>
            </Paper>
        </Box>
  );
}
export default LoginPage;