
import { blue } from "@mui/material/colors";
import React from "react";
import ReactDOM from "react-dom";
import { Button, CardActions, IconButton, Paper, TextField, Box, Typography, Divider, List, InputAdornment, Grid, Card, CardMedia, CardContent, CardHeader, CardActionArea } from "@mui/material";
import { Comment, Image, VolumeUp } from "@mui/icons-material";
import { Search } from "@mui/icons-material";

const contents = [{img: "/news-images/poachershunt.jpeg", 
                    title:"Poachers hunt with impunity", 
                    content: "The beautiful bird, which exists in millions, was captured by the poachers at night by playing the prerecorded quail sound on a tape recorder. Thus quail got netted. The poachers took them to the hotels in Thal where they sold this beautiful wild bird, he said."
                    ,comments: 3
                },
            {
                img: "/news-images/birdmigration.jpg", 
                title: "Intercepting the illegal capture of migratory birds in south-central West Bengal", 
            content: "For several years, migratory birds are poached during their winter stop at wetlands (beel in Bengali) and open fields in the central-south Bengal districts of Murshidabad, Malda, Birbhum and Bardhaman. These wetlands and fields are covered with nets that turn into death traps. The trapped birds are illegally sold in the market as delicacies."
            ,author: "John Doe"
            , comments: 0
            },
            {
                img: "/news-images/tigerhunted.webp",
                title: "Tiger electrocuted, mutilated by poachers in Gadchiroli div",
                content:"Nagpur: Even 48 hours later, the accused involved in electrocuting a tiger and chopping off three paws and skull in Chatgaon forest range of  division are still at large. This is the 41st tiger death in Maharashtra since January 1, 2023, perhaps the highest in the country."
                ,author: "John Doe"
                , comments: 0
            },
        {
            img: "/news-images/princeimage.jpeg",
            title: "Prince William to highlight Southeast Asia’s role in illegal wildlife trade with Singapore summit",
            content: "A local social activist, Malik Noor Mohammad, told The Express Tribune that in the Kohistan mountain range, rabbits and other rare wild animals were being hunted. Hunting of the rare Siberian fowl had been going on in Noorpur Thal area. He said that it was difficult to control poaching due to the lack of personnel in the government department. The government must pay attention to this aspect and fill the vacant posts, he said. Muhammad Farooq, a local resident, said that Ariyal was found in the hill ranges of Chakwal, Jhelum, Khushab and Attock."
            ,author: "John Doe"
            , comments: 0
        },
        {
            img: "/news-images/sumerantiger.webp",
            title: "Zoo Miami’s Sumatran tiger, ‘Berani,’ in serious condition",
            content: "Zoo Miami’s adult male Sumatran tiger, “Berani,” is currently in serious condition, with concerns raised by the Animal Science and Animal Health teams due to his recent loss of appetite and lethargy. According to officials with Zoo Miami, Berani was transported to the zoo’s Animal Hospital after being immobilized Wednesday for a series of exams to determine the cause of his abnormal behavior."
            ,author: "John Doe"
            , comments: 0
        }, 
        {
            img: "/news-images/karnatakapoaching.jpeg",
            title: "Forest officials face pressure from politicians to go easy on possession of wildlife articles in Karnataka",
            content: "Forest Department officials are in a fix over the intervention of elected representatives in enforcing laws meant to protect wildlife with regard to possession of wildlife articles.            "
            ,author: "John Doe"
        }]
const Item = ({...props}) => {

    const identifier = "comments-"+props.id
    const commentData = localStorage.getItem(identifier)
    const [comments, setComments] = React.useState(commentData ? JSON.parse(commentData): [])
    return (<Card elevation={6} sx={{display: 'flex', flexDirection: "column", ':hover': {
        transform: "scale3d(1.01, 1.01, 1)"
      }}} >
        <CardActionArea href={"/news/"+props.id+""}>
        <CardMedia
        component="img"
        height={props.big ? 400: 200}
        image={process.env.PUBLIC_URL + contents[props.id]?.img}
      />
      

    <CardContent>
        <Typography variant="h4">{contents[props.id]?.title}</Typography>
        <Typography variant="subtitle2">{contents[props.id]?.author}</Typography>
      <Typography variant="body" sx={{
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
    }}>{contents[props.id]?.content}</Typography>
    </CardContent>

    </CardActionArea>
    <CardActions disableSpacing>
        <Button>
          <Comment/> {comments.length}
        </Button>
    </CardActions>
    </Card>);
  }
const NewsPage = () => {
    return (
    <Box sx={{padding:"2%"}}>
        <Box sx={{display: 'flex' ,width: "100%"}}>
            <Typography variant="h2" sx={{justifyContent: true, flex: 1, textAlign: "center", fontFamily: "Dancing Script"}}>PoachThePoachers</Typography>
        </Box>
        <Box sx={{display: 'flex' ,width: "100%"}}>
            <Typography sx={{justifyContent: true, flex: 1, textAlign: "center"}}>We preserve all flora and fauna and protect it from illegal human activities.</Typography>
        </Box>
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Item big={true} id={0}/>
            </Grid>
            <Grid item xs={4}>
                <Item id={1}/>
            </Grid>
            <Grid item xs={4}>
                <Item id={2}/>
            </Grid>
            <Grid item xs={4}>
                <Item id={3}/>
            </Grid>
            <Grid item xs={4}>
                <Item id={4}/>
            </Grid>
            <Grid item xs={4}>
                <Item id={5}/>
            </Grid>
        </Grid>
    </Box>

    );
}

export default NewsPage;