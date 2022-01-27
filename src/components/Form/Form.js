import React, { useState } from 'react';
import useStyles from './styles.js'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux'
import {createPost} from '../../action/posts.js'

const Form = ({currentId, setCurrentId}) => {
    const classes = useStyles();
    const [postData,setPostData] =  useState({
        creator:'', 
        title: '', 
        message:'',
        tags:'', 
        selectedFile:'',
    })
    const dispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault()
       dispatch(createPost(postData))
    }
    const clear = () =>{
       setPostData({
        creator:'', 
        title: '', 
        message:'',
        tags:'', 
        selectedFile:'',
       })
    }
    return(
        <Paper className={classes.paper}>
            <form 
            autoComplete='off' 
            noValidate 
            className={`${classes.form} ${classes.root}`} 
            onSubmit={handleSubmit}>
                 <Typography variant="h2"> Creation des memoires</Typography>
                 <TextField 
                    name="creator" 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth
                    value={postData.creator}
                    onChange={(e)=>setPostData({...postData, creator: e.target.value})}/>
                     <TextField 
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth
                    value={postData.title}
                    onChange={(e)=>setPostData({...postData, title: e.target.value})}/>
                     <TextField 
                    name="creator" 
                    variant="outlined" 
                    label="Message" 
                    fullWidth
                    value={postData.message}
                    onChange={(e)=>setPostData({...postData, message: e.target.value})}/>
                     <TextField 
                    name="creator" 
                    variant="outlined" 
                    label="Tags" 
                    fullWidth
                    value={postData.tags}
                    onChange={(e)=>setPostData({...postData, tags: e.target.value})}/>
                     <TextField 
                    name="creator" 
                    variant="outlined" 
                    label="SelectedFile" 
                    fullWidth
                    value={postData.selectedFile}
                    onChange={(e)=>setPostData({...postData, selectedFile: e.target.value})}/>
                    <div className={classes.fileInput}>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={(base64) => setPostData({...postData, selectedFile: base64})}
                        />

                    </div>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size='large' type='submit' fullWidth>Submit</Button>
                    <Button  variant="contained" color="secondary" size='small' onClick={clear} fullWidth>clear</Button>
            </form>
            {console.log(postData)}
        </Paper>
    );
}
export default Form 