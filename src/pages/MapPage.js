
import { blue } from "@mui/material/colors";
import React from "react";
import ReactDOM from "react-dom";
import { ZoomableGroup, ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Button, IconButton, Paper, Typography, Box , CardActionArea, Card, CardMedia, CardContent, CardActions, Grid, Modal} from "@mui/material";
import { Marker } from "react-simple-maps"
import { Circle, CircleSharp, Info } from "@mui/icons-material";

const geoUrl =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_land.geojson";


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
  
    return (<Card elevation={6} sx={{display: 'flex', flexDirection: "column", ':hover': {
        transform: "scale3d(1.01, 1.01, 1)"
      }}} >
        <CardActionArea onClick={()=>{handleOpen()}}>
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
    {title: "Area Inspector", content: "Get hands-on experience in investigating illegal wildlife interference in our areas of operations"},
    {title: "HR Manager", content: "Hire the best talents into our esteemed company"}
]
const MapPage = () => {
    const [loaded, setLoaded] = React.useState(false)
    return (
    <>
    <div style={{padding: 100 }}>

        <Typography variant="h2">1. Select location of operation</Typography>
        <Paper>
        {!loaded && <Typography variant="h3">Loading map. Please wait</Typography>}
    <ComposableMap width={800} height={600}>
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
            <Marker coordinates={[-74.006, 40.7128]}>
                <text>
                <button>aaa</button>
                </text>
            </Marker>
    </ComposableMap>
    </Paper>
    <Typography variant="h2">2. Select job profile</Typography>

    <Box sx={{padding:"2%"}}>
        <Grid container spacing={4}>
            <Grid item xs={4}>
                <Item big={true} id={0}/>
            </Grid>
            <Grid item xs={4}>
                <Item id={1}/>
            </Grid>
            <Grid item xs={4}>
                <Item id={2}/>
            </Grid>

        </Grid>
    </Box>

  </div>
  </>);
}

export default MapPage;