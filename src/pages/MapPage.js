
import { blue } from "@mui/material/colors";
import React from "react";
import ReactDOM from "react-dom";
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Button, IconButton, Paper, Typography, Box , CardActionArea, Card, CardMedia, CardContent, CardActions, Grid, Modal, TextField, Tooltip} from "@mui/material";

import { Marker } from "react-simple-maps"
import { Circle, CircleSharp, Info, CloudUploadIcon, Help } from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const geoUrl =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_land.geojson";

const helpContent = `To select your desired work location.
1. The map shows markers which indicate available offices you can apply for.
2. On clicking them, your location selected should turn green.
3. You can simply click another marker to change your selected location `
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const Item = ({...props}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const [fileName, setFileName] = React.useState("")
    return (<Card elevation={6} sx={{display: 'flex', flexDirection: "column", ':hover': {
        transform: "scale3d(1.01, 1.01, 1)"
      },
      borderBottom: 5, borderColor:props.profile == props.id? "blue": "black"
      }} >
        <CardActionArea onClick={()=>{props.setProfile(props.id)}}>
    <CardContent>
        <Typography variant="h4">{jobProfiles[props.id]?.title}</Typography>
        <Typography variant="h5">{jobProfiles[props.id]?.content}</Typography>
    </CardContent>

    </CardActionArea>
    <CardActions disableSpacing>
        <IconButton onClick={handleOpen}>
          <Info/>
        </IconButton>
    </CardActions>
    <Modal
        open={open}
        onClose={handleClose}
        >
        <Box sx={modalStyle}>
        <Typography variant="h4">{jobProfiles[props.id]?.title}</Typography>
        <Typography variant="body" whiteSpace={'pre-line'}>{jobProfiles[props.id]?.detail}</Typography>
        <Button onClick={handleClose}>Close</Button>
        </Box>
        </Modal>
    </Card>);
  }
const jobProfiles = [
    {title: "Web Designer", content: "Help in upkeep of our website to help spread the word of the wildlife cause!",
    detail: `
        Skills:
        - Good knowledge of JavaScript
        - 5 years of experience with React
        - Solid fundamentals of design libraries like Material
        - General knowledge of script in Python
        Responsibilities:
        - Maintain and improve the official website
        - Maintain pipeline for adding news articles
        - Develop internal portals for employee use
    `},
    {title: "Area Inspector", 
    content: "Get hands-on experience in investigating illegal wildlife interference in our areas of operations"},
    {title: "HR Manager", content: "Hire the best talents into our esteemed company",
    detail:   ` 
        Experience:
        - 5 years of management
        Responsibilities:
        - Manage recruiting drives
        - Prepare job profiles for applicants
        - Promote on linkedin
    `}
]
const MapPage = () => {
    const [email, setEmail] = React.useState("")
    const [emailHelper, setEmailHelper] = React.useState("")

    const [password, setPassword] = React.useState("")
    const [passwordHelper, setPasswordHelper] = React.useState("")

    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [confirmPasswordHelper, setConfirmPasswordHelper] = React.useState("")

    const [loaded, setLoaded] = React.useState(false)
    const [file, setFile] = React.useState("")

    const [profile, setProfile] = React.useState(-1)
    const [marker, setMarker] = React.useState(-1)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openHelp, setOpenHelp] = React.useState(false);
    const handleOpenHelp = () => setOpenHelp(true);
    const handleCloseHelp = () => setOpenHelp(false);

    const navigate = useNavigate()

    const submit = () => {
        navigate("/thanks")
    }
    return (
    <>
    <div style={{padding: 100 }}>

        <Typography variant="h2">1. Select location of operation <IconButton onClick={handleOpenHelp}><Help/></IconButton></Typography>
        <Paper>
        {!loaded && <Typography variant="h3">Loading map. Please wait</Typography>}
    <ComposableMap width={800} height={600} >
            <Geographies geography={geoUrl} parseGeographies={(geos) => {
                setLoaded(true)
    return geos.map((g) => {
      // Process geographies here...
      return g })}}>
            {({ geographies }) =>
                geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} fill="#FF5533"/>
                ))
            }
            </Geographies>
            <Marker coordinates={[72.8777, 19.0760]}>
                <circle r={5} fill={marker == 1? "#00FF00" :"#76D"} onClick={()=>{setMarker(1)}}/>
                <text paddingX="20px">Mumbai</text>
            </Marker>
            <Marker coordinates={[-85.3232, 51.2538]}>
                <circle r={5} fill={marker == 2? "#00FF00" :"#76D"} onClick={()=>{setMarker(2)}}/>
                <text paddingX="20px" fontFamily="Rubik">Ontario</text>
            </Marker>
            <Marker coordinates={[18.4241, -33.9249]}>
                <circle r={5} fill={marker == 3? "#00FF00" :"#76D"} onClick={()=>{setMarker(3)}}/>
                <text paddingX="20px" fontFamily="Rubik">Cape Town</text>
            </Marker>
    </ComposableMap>
    </Paper>
    <Typography variant="h2">2. Select job profile</Typography>

    <Box sx={{padding:"2%"}}>
        <Grid container spacing={4}>
            <Grid item xs={4}>
                <Item id={0} setProfile={setProfile} profile={profile}/>
            </Grid>
            <Grid item xs={4}>
                <Item id={1} setProfile={setProfile} profile={profile}/>
            </Grid>
            <Grid item xs={4}>
                <Item id={2} setProfile={setProfile} profile={profile}/>
            </Grid>

        </Grid>
    </Box>
    <Typography variant="h3">3. Fill Details</Typography>
    <Paper sx={{marginX: "25%", marginY: "5%", paddingX: "4%", paddingY: "2%"}} elevation={10}>
                <form>
                <Box sx={{display: 'flex' ,width: "100%"}}>
                    <Typography variant="h3" sx={{justifyContent: true, flex: 1, textAlign: "center"}}>Register new account</Typography>
                </Box>
                <Box sx={{display: 'flex' ,width: "100%", flexDirection: "horizontal"}}>
                    <TextField sx={{justifyContent: true, flex: 1, marginY: "10px"}}
                        label="First Name" type="text"/>
                    <TextField sx={{justifyContent: true, flex: 1, marginY: "10px"}}
                        label="Last name" type="text"/>
                </Box>
                <Box sx={{display: 'flex' ,width: "100%", flexDirection: "horizontal", alignItems: "center"}}>
                    <TextField sx={{justifyContent: true, flex: 1, marginY: "10px"}}
                        label="Phone Number" type="number"/>
                        <Tooltip title="Format: +Country Code (9-10 digit number)">
                            <Help/>
                        </Tooltip>
                </Box>
                <Box sx={{display: 'flex' ,width: "100%"}}>
                    <TextField sx={{justifyContent: true, flex: 1, marginY: "10px"}}
                        label="Passport/National ID Number" type="number"/>
                </Box>
                <Box sx={{display: 'flex' ,width: "100%"}}>
                    <TextField sx={{justifyContent: true, flex: 1, marginY: "10px"}}
                        label="Email" type="text"/>
                </Box>
                <Box sx={{display: 'flex' ,width: "100%", flexDirection: "horizonal"}}>
                <Button component="label" variant="contained">
                    Upload Resume
                    <VisuallyHiddenInput type="file" onChange={(evt)=>{
                        if (evt.target.files.length > 0)
                        {
                            const name = evt.target.files[0]?.name
                            if (name.endsWith(".pdf"))
                            {
                                setFile(name)
                            }
                        }
                    }}/>
                </Button>
                {file == "" &&<Typography>No file uploaded</Typography>}
                {file != "" &&<Typography>{file}</Typography>}
                </Box>
                <Box sx={{display: 'flex' ,width: "100%"}}>
                    <Button sx={{justifyContent: true, flex: 1, marginY: "10px", marginX: "15%"} } onClick={()=>{handleOpen()}}>Submit</Button>
                </Box>
                </form>
            </Paper>
        <Modal
                open={open}
                onClose={handleClose}
                >
                <Box sx={modalStyle}>
                <Typography variant="h6">Ensure your details are correct to the best of your knowledge</Typography>
                <Button onClick={handleClose}>Back</Button>
                <Button onClick={submit}>Submit</Button>

                </Box>
        </Modal>
        <Modal
                open={openHelp}
                onClose={handleCloseHelp}
                >
                <Box sx={modalStyle}>
                <Typography variant="h6">{helpContent}</Typography>
                <Button onClick={handleCloseHelp}>Back</Button>
                </Box>
        </Modal>
  </div>
  </>);
}

export default MapPage;