
import { useParams } from "react-router-dom"
import { Typography, Box, Divider, TextField, Button, Stack, List, Modal, IconButton } from "@mui/material";
import React from "react";
import { ArrowBack, Person2Rounded } from "@mui/icons-material";
const contents = [{id: 1,
                    img: "/news-images/poachershunt.jpeg", 
                    title:"Poachers hunt with impunity", 
                    content: "The beautiful bird, which exists in millions, was captured by the poachers at night by playing the prerecorded quail sound on a tape recorder. Thus quail got netted. The poachers took them to the hotels in Thal where they sold this beautiful wild bird, he said."
                },
            {   id: 2,
                img: "/news-images/birdmigration.jpg", 
            title: "Intercepting the illegal capture of migratory birds in south-central West Bengal", 
            content: "For several years, migratory birds are poached during their winter stop at wetlands (beel in Bengali) and open fields in the central-south Bengal districts of Murshidabad, Malda, Birbhum and Bardhaman. These wetlands and fields are covered with nets that turn into death traps. The trapped birds are illegally sold in the market as delicacies."
            ,author: "John Doe"
            },
            {   id:3,
                img: "/news-images/tigerhunted.webp",
                title: "Tiger electrocuted, mutilated by poachers in Gadchiroli div",
                content:"Nagpur: Even 48 hours later, the accused involved in electrocuting a tiger and chopping off three paws and skull in Chatgaon forest range of  division are still at large. This is the 41st tiger death in Maharashtra since January 1, 2023, perhaps the highest in the country."
                ,author: "John Doe"

            },
        {   id: 4,
            img: "/news-images/princeimage.jpeg",
            title: "Prince William to highlight Southeast Asia’s role in illegal wildlife trade with Singapore summit",
            content: "A local social activist, Malik Noor Mohammad, told The Express Tribune that in the Kohistan mountain range, rabbits and other rare wild animals were being hunted. Hunting of the rare Siberian fowl had been going on in Noorpur Thal area. He said that it was difficult to control poaching due to the lack of personnel in the government department. The government must pay attention to this aspect and fill the vacant posts, he said. Muhammad Farooq, a local resident, said that Ariyal was found in the hill ranges of Chakwal, Jhelum, Khushab and Attock."
            ,author: "John Doe"

        },
        {   id: 5,
            img: "/news-images/sumerantiger.webp",
            title: "Zoo Miami’s Sumatran tiger, ‘Berani,’ in serious condition",
            content: "Zoo Miami’s adult male Sumatran tiger, “Berani,” is currently in serious condition, with concerns raised by the Animal Science and Animal Health teams due to his recent loss of appetite and lethargy. According to officials with Zoo Miami, Berani was transported to the zoo’s Animal Hospital after being immobilized Wednesday for a series of exams to determine the cause of his abnormal behavior."
            ,author: "John Doe"

        }, 
        {   id: 6,
            img: "/news-images/karnatakapoaching.jpeg",
            title: "Forest officials face pressure from politicians to go easy on possession of wildlife articles in Karnataka",
            content: "Forest Department officials are in a fix over the intervention of elected representatives in enforcing laws meant to protect wildlife with regard to possession of wildlife articles.            "
            ,author: "John Doe"

        }]


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

const CommentEntry = ({...props}) => {
    const currentLogin = localStorage.getItem("login")
    const delFunc = () => {
        props.delete(props.comment.id)
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box width="100%">
            <Divider/>

            <Typography variant="subtitle2"><Person2Rounded/>{props.comment?.author}</Typography>
            <Typography variant="h6">{props.comment?.comment}</Typography>
            {currentLogin == props.comment?.author && <Button color="error" onClick={handleOpen}>Delete</Button>}
            <Divider />
            <Modal
                open={open}
                onClose={handleClose}>
                <Box sx={modalStyle}>
                <Typography variant="subtitle">Are you sure you want to delete this comment?</Typography>
                <Box>
                    <Button onClick={handleClose}>Back</Button>
                    <Button onClick={()=>{
                        delFunc()
                        handleClose()}}>Delete</Button>

                </Box>
                </Box>
        </Modal>
        </Box>
    );
}
const NewsSinglePage = () => {
    let { id } = useParams();
    const [comment, setComment] = React.useState("")
    const identifier = "comments-"+id
    const commentData = localStorage.getItem(identifier)
    const [comments, setComments] = React.useState(commentData ? JSON.parse(commentData): [])
    const submitComment = () => {
        const newComments = [...comments, {id:comments.length+1, author: localStorage.getItem("login"), comment: comment}]
        localStorage.setItem(identifier, JSON.stringify(newComments))
        setComments(newComments)
        setComment("")
    }


    const deleteFunc = (id) => {
        const newComments = comments.filter((c) => {
            return c.id !== id;
          })
        localStorage.setItem(identifier, JSON.stringify(newComments))
        setComments(newComments);
    }
    return (
        <>
        <Box marginLeft="5%" marginRight="40%">
        <IconButton href="/"><Typography variant="h3"><ArrowBack/>Back</Typography></IconButton>
        <Typography variant="h3">{contents[id].title}</Typography>
        <img src={contents[id].img} width="800px"/>
        <Typography>{contents[id].content}</Typography>
        </Box>
        <Divider style={{width:"40%", marginBottom:"10px"}}/>
        <Box  marginLeft="2%" marginRight="60%" marginBottom="20px" >
            <Typography variant="h4">Discussion</Typography>
            <Divider style={{width:"20%", marginBottom:"10px"}}/>
            <Typography variant="subtitle2">Enter your comment: </Typography>
            <TextField fullWidth label="Description" placeholder="Enter your comment here" multiline rows={10} value={comment} onChange={(evt) => {setComment(evt.target.value)}}/>
            <Button onClick={submitComment}>Post</Button>
            <Box sx={{display:'flex', flexDirection: "column-reverse"}}>
                {comments.reverse().map(function(data) {
                    return <CommentEntry delete={deleteFunc} comment={data}/>
                })}
                </Box>
        </Box>

        </>
    )
}

export default NewsSinglePage;