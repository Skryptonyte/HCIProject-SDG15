
import { blue } from "@mui/material/colors";
import React from "react";
import ReactDOM from "react-dom";
import { Paper, TextField, Box, Typography, Divider, List, InputAdornment, Card, CardContent, IconButton, CardMedia } from "@mui/material";
import { Search } from "@mui/icons-material";


const companyList = [
    {"img":"/company-images/iattc.jpeg",
    "title":"Inter-American Tropical Tuna Commission",
    "description":"An organization aims to preserve fauna of various tuna species. However, vessels have been caught on more than one occasion engaging in IUU fishing."
    },
    {"img":"/company-images/meta.png",
    "title":"Meta",
    "description":"While not directly participating in illegal wildlife trading, Meta has failed to be effective in taking down content trying to advertise products blatantly acquired through illegal wildlife trafficking and poaching"
    }
]
const Item = ({...props}) => {
    return (<Card sx={{ display: 'flex', margin: "2%" }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={process.env.PUBLIC_URL + props.content?.img}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    {props.content?.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                {props.content?.description}
                </Typography>
                </CardContent>
            </Box>

    </Card>);
}
const SearchPage = () => {
    const [searchTerm, setSearchTerm] = React.useState("")
    return (
    <Box>
        <Box sx={{display: 'flex' ,width: "100%"}}>
            <Typography fontFamily="Dancing Script" variant="h2" sx={{justifyContent: true, flex: 1, textAlign: "center"}}>Hall of Shame</Typography>
        </Box>
        <Box sx={{display: 'flex' ,width: "100%"}}>
            <Typography sx={{justifyContent: true, flex: 1, textAlign: "center"}}>Based on reports from volunteers and anonymous reports from around the world, we have catalogued an exhaustive list of businesses</Typography>
        </Box>
        <Box sx={{display: 'flex' ,width: "100%"}}>
            <Typography sx={{justifyContent: true, flex: 1, textAlign: "center"}}>These businesses make direct/indirect use of illegally acquired wildlife products or facilitate in other parties whether intentional or not!</Typography>
        </Box>
        <Box sx={{display: 'flex' ,width: "100%"}}>
            <TextField sx={{justifyContent: true, flex: 1, marginX: "50px", marginY: "25px"}}
                    label="Search"
                    value={searchTerm}
                    onChange={(evt)=>{setSearchTerm(evt.target.value)}}
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
        <List style={{maxWidth: '100%', overflow: 'auto', marginX: "100px"}}>
        {companyList.map(function(data) {
                console.log(data)
                if (data['title'].toLowerCase().includes(searchTerm.toLowerCase()) || data['description'].toLowerCase().includes(searchTerm.toLowerCase()))
                {
                return (
                    <Item content={data}/>
                )
                }
                else {
                    return <></>
                }
                })}
        </List>
    </Box>

    );
}

export default SearchPage;