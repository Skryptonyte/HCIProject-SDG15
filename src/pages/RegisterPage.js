import { Paper, TextField, Button, Box, Typography, Link, Tooltip } from "@mui/material"
import Stack from '@mui/material/Stack';
import React from "react";
import "@fontsource/dancing-script"
import "@fontsource/rubik"
import { Help } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { green } from "@mui/material/colors";
const RegisterPage = () => {
    const formRef = React.useRef();
    const [email, setEmail] = React.useState("")
    const [emailHelper, setEmailHelper] = React.useState("")

    const [username, setUsername] = React.useState("")
    const [usernameHelper, setUsernameHelper] = React.useState("")

    const [password, setPassword] = React.useState("")
    const [passwordHelper, setPasswordHelper] = React.useState("")

    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [confirmPasswordHelper, setConfirmPasswordHelper] = React.useState("")
    const navigate = useNavigate()
    const [registerSuccess, setRegisterSuccess] = React.useState(false)
    const onSubmit = () => {
        // Fill pass
        var pass = 1
        if (email == ""){
            setEmailHelper("Please fill your email")
            pass = 0
        }
        if (username == ""){
            setUsernameHelper("Please fill your username")
            pass = 0
        }
        if (password == ""){
            setPasswordHelper("Please fill your password")
            pass = 0
        }
        if (!pass){
            return
        }
        if (password.length < 8){
            setPasswordHelper("Password must be 8 or more characters")
            return;
        }
        if (confirmPassword !== password){
            setConfirmPasswordHelper("Passwords do not match!")
            return;
        }
        setRegisterSuccess(true)
        const timer = setTimeout(() => {
            navigate("/login")
            navigate(0)
        }, 5000);
    }
    return (
        <Box>
            <Paper sx={{marginX: "25%", marginY: "5%", paddingX: "4%", paddingY: "2%"}} elevation={10}>
                <form>
                <Box sx={{display: 'flex' ,width: "100%"}}>
                    <Typography variant="h3" sx={{justifyContent: true, flex: 1, textAlign: "center"}}>Register new account</Typography>
                </Box>
                <Box sx={{display: 'flex' ,width: "100%", flexDirection: "horizontal", alignItems: "center"}}>
                    <TextField sx={{justifyContent: true, flex: 1, marginY: "10px"}}
                        label="Email" type="text" helperText={emailHelper} error={emailHelper != ""} 
                        value={email}
                        onChange={(event) => {
                            setEmailHelper("")
                            setEmail(event.target.value);
                          }}/>
                          <Tooltip title="Email must be of format name@emailprovider.domain" >
                            <Help fontSize="small"/>
                          </Tooltip>
                </Box>
                <Box sx={{display: 'flex' ,width: "100%", flexDirection: "horizontal", alignItems: "center"}}>
                    <TextField sx={{justifyContent: true, flex: 1, marginY: "10px"}}
                        label="Username" type="text" helperText={usernameHelper} error={usernameHelper != ""} 
                        value={username}
                        onChange={(event) => {
                            setUsernameHelper("")
                            setUsername(event.target.value);
                          }}/>
                          <Tooltip title="Username must be alphanumeric. Do not use your real name here." >
                            <Help fontSize="small"/>
                          </Tooltip>
                </Box>
                <Box sx={{display: 'flex' ,width: "100%", flexDirection: "horizontal", alignItems: "center"}}>
                    <TextField sx={{justifyContent: true, flex: 1, marginY: "10px"}}
                        label="Password" type="password" helperText={passwordHelper} error={passwordHelper != ""}
                        value={password}
                        onChange={(event) => {
                            setPasswordHelper("")
                            setPassword(event.target.value);
                          }}/>
                          <Tooltip title="Password must be 8 or more characters" >
                            <Help fontSize="small"/>
                          </Tooltip>
                </Box>
                <Box sx={{display: 'flex' ,width: "100%", flexDirection: "horizontal", alignItems: "center"}}>
                    <TextField sx={{justifyContent: true, flex: 1, marginY: "10px"}}
                        label="Confirm Password" type="password" helperText={confirmPasswordHelper} error={confirmPasswordHelper != ""}
                        value={confirmPassword}
                        onChange={(event) => {
                            setConfirmPasswordHelper("")
                            setConfirmPassword(event.target.value);
                          }}/>
                          <Tooltip title="Passwords must match!" >
                            <Help fontSize="small"/>
                          </Tooltip>
                </Box>
                <Box sx={{display: 'flex' ,width: "100%"}}>
                    <Button onClick={onSubmit} sx={{justifyContent: true, flex: 1, marginY: "10px", marginX: "15%"}}>Register</Button>
                </Box>
                {      registerSuccess &&         <Box sx={{display: 'flex' ,width: "100%", flexDirection: "horizontal", alignItems: "center"}}>
                    <Typography sx={{color: green[500]}}variant="subtitle1">Registration succeeded! Returning to login!</Typography>
                </Box>}
                </form>
            </Paper>
        </Box>
  );
}
export default RegisterPage;