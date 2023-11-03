
import { blue } from "@mui/material/colors";
import React from "react";
import ReactDOM from "react-dom";
import { Paper, TextField, Box, Typography, Divider, List, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchPage = () => {
    return (
    <Box>
        <Box sx={{display: 'flex' ,width: "100%"}}>
            <Typography variant="h2" sx={{justifyContent: true, flex: 1, textAlign: "center"}}>Poaching Blacklist</Typography>
        </Box>
        <Box sx={{display: 'flex' ,width: "100%"}}>
            <Typography sx={{justifyContent: true, flex: 1, textAlign: "center"}}>Based on reports from volunteers and anonymous reports from around the world, we have catalogued an exhaustive list of businesses</Typography>
        </Box>
        <Box sx={{display: 'flex' ,width: "100%"}}>
            <Typography sx={{justifyContent: true, flex: 1, textAlign: "center"}}>These businesses make indirect/direct use of poached products or even engage in poaching directly!</Typography>
        </Box>
        <Box sx={{display: 'flex' ,width: "100%"}}>
            <TextField sx={{justifyContent: true, flex: 1, marginX: "50px", marginY: "25px"}}
                    label="Search"

            InputProps={{
        style: {
        borderRadius: "30px",
        startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          )
        }
    }}/>
        </Box>
        <Box sx={{display: 'flex' ,width: "100%"}}>
            <Divider sx={{justifyContent: true, flex: 1, textAlign: "center",  marginX: "20%", marginY: "25px"}}/>
        </Box>
        <List style={{maxHeight: '100%', overflow: 'auto'}}>
            <Paper sx={{marginX: "20%", marginY: "10px", padding: "2%"}} elevation={5}>
                Power
            </Paper>
            <Paper sx={{marginX: "20%", marginY: "10px", padding: "2%"}} elevation={5}>
                Power
            </Paper>
            <Paper sx={{marginX: "20%", marginY: "10px", padding: "2%"}} elevation={5}>
                Power
            </Paper>
            <Paper sx={{marginX: "20%", marginY: "10px", padding: "2%"}} elevation={5}>
                Power
            </Paper>
            <Paper sx={{marginX: "20%", marginY: "10px", padding: "2%"}} elevation={5}>
                Power
            </Paper>
            <Paper sx={{marginX: "20%", marginY: "10px", padding: "2%"}} elevation={5}>
                Power
            </Paper>
            <Paper sx={{marginX: "20%", marginY: "10px", padding: "2%"}} elevation={5}>
                Power
            </Paper>
        </List>
    </Box>

    );
}

export default SearchPage;