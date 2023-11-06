import { Add, Delete, DeleteForever, Edit } from "@mui/icons-material";
import { Box, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Paper, IconButton, Modal, Typography, Button, TextField } from "@mui/material"
import React from "react";
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

const RowEle = ({...props}) => {
    const [openEdit, setOpenEdit] = React.useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);
    const [title, setTitle] = React.useState("")
    const [description, setDesc] = React.useState("")
return ( <TableRow
    key={props.row?.id}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
    <TableCell component="th" scope="row">
        {props.rows[props.id].title}
    </TableCell>
    <TableCell align="right">{props.rows[props.id].description}</TableCell>
    <TableCell align="right">{props.rows[props.id].date}</TableCell>
    <TableCell align="right">Pending</TableCell>
    <TableCell align="right">
        <IconButton onClick={()=> {
            setTitle(props.rows[props.id].title)
            setDesc(props.rows[props.id].description)
            handleOpenEdit()
        }}><Edit/></IconButton>
        <IconButton onClick={() => {props.del(props.id)}}><Delete/></IconButton>
    </TableCell>
    <Modal
                open={openEdit}
                onClose={handleCloseEdit}>
                <Box sx={modalStyle}>
                <Typography variant="h3">Modify Report</Typography>
                <Box sx={{display: 'flex' ,width: "100%", flexDirection: "horizontal", alignItems: "center"}}>
                    <TextField sx={{justifyContent: true, flex: 1, marginY: "10px"}}
                        label="Title" type="text" value={title} onChange={(evt)=>{setTitle(evt.target.value)}}/>
                </Box>
                <Box sx={{display: 'flex' ,width: "100%", flexDirection: "horizontal", alignItems: "center"}}>
                    <TextField sx={{justifyContent: true, flex: 1, marginY: "10px"}}
                        label="Description" multiline rows={6}  value={description} onChange={(evt)=>{setDesc(evt.target.value)}}/>
                </Box>
                <Box>
                    <Button onClick={handleCloseEdit}>Back</Button>
                    <Button onClick={()=>{
                        props.edit(props.id,title,description)
                        setTitle("")
                        setDesc("")
                        handleCloseEdit()
                        }}>Submit</Button>

                </Box>
                </Box>
        </Modal>
    </TableRow>)
}
const IncidentList = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [rows, setRows] = React.useState([{title: "man",description: "test"}])

    const [title, setTitle] = React.useState("")
    const [description, setDesc] = React.useState("")
    const submit = () => {
        setRows([...rows, {title: title, description: description, date: (new Date()).toString()}])
        setTitle("")
        setDesc("")
        handleClose()
    }
    const del = (i) => {
        setRows(current =>
                rows.filter((c, index) => {
              return i !== index;
            }),
          )
    }
    const edit = (i, title, desc) => {
        setRows(rows.map((row, index) => {
            if (index == i)
            {
                return {title: title, description: desc}
            }
            else {
                return row
            }
        })
          )
    }
    return (<Box>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell>Title <IconButton onClick={handleOpen}><Add/></IconButton></TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Date of submission</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Actions</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, index) => (
                   <RowEle rows={rows} id={index} del={del} edit={edit} />
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            <Modal
                open={open}
                onClose={handleClose}>
                <Box sx={modalStyle}>
                <Typography variant="h3">Report incident</Typography>
                <Box sx={{display: 'flex' ,width: "100%", flexDirection: "horizontal", alignItems: "center"}}>
                    <TextField sx={{justifyContent: true, flex: 1, marginY: "10px"}}
                        label="Title" type="text" value={title} onChange={(evt)=>{setTitle(evt.target.value)}}/>
                </Box>
                <Box sx={{display: 'flex' ,width: "100%", flexDirection: "horizontal", alignItems: "center"}}>
                    <TextField sx={{justifyContent: true, flex: 1, marginY: "10px"}}
                        label="Description" multiline rows={6}  value={description} onChange={(evt)=>{setDesc(evt.target.value)}}/>
                </Box>
                <Box>
                    <Button onClick={handleClose}>Back</Button>
                    <Button onClick={submit}>Submit</Button>

                </Box>
                </Box>
        </Modal>

    </Box>);
}

export default IncidentList;