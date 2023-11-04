import { Paper, TextField, Button, Box, Typography, Link } from "@mui/material"
import Stack from '@mui/material/Stack';
import React from "react";
import "@fontsource/dancing-script"
import "@fontsource/rubik"

const RegisterPage = () => {
    const formRef = React.useRef();
    const [email, setEmail] = React.useState("")
    const [emailHelper, setEmailHelper] = React.useState("")

    const [password, setPassword] = React.useState("")
    const [passwordHelper, setPasswordHelper] = React.useState("")

    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [confirmPasswordHelper, setConfirmPasswordHelper] = React.useState("")

    const onSubmit = () => {
        // Fill pass
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
        if (password.length < 8){
            setPasswordHelper("Password must be 8 or more characters")
            return;
        }
        if (confirmPassword !== password){
            setConfirmPasswordHelper("Passwords do not match!")
            return;
        }
    }
    return (
        <Box>
            <Paper sx={{marginX: "25%", marginY: "5%", paddingX: "4%", paddingY: "2%"}} elevation={10}>
                <form>
                <Box sx={{display: 'flex' ,width: "100%"}}>
                    <Typography variant="h3" sx={{justifyContent: true, flex: 1, textAlign: "center"}}>Register new account</Typography>
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
                    <TextField sx={{justifyContent: true, flex: 1, marginY: "10px"}}
                        label="Confirm Password" type="password" helperText={confirmPasswordHelper} error={confirmPasswordHelper != ""}
                        value={confirmPassword}
                        onChange={(event) => {
                            setConfirmPasswordHelper("")
                            setConfirmPassword(event.target.value);
                          }}/>
                </Box>
                <Box sx={{display: 'flex' ,width: "100%"}}>
                    <Button onClick={onSubmit} sx={{justifyContent: true, flex: 1, marginY: "10px", marginX: "15%"}}>Register</Button>
                </Box>
                </form>
            </Paper>
        </Box>
  );
}
export default RegisterPage;