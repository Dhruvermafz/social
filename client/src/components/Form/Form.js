import React, {useState, useEffect} from 'react'
import {TextField, Button, Typography, Paper} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import FileBase from 'react-file-base64'
import useStyles from './styles'
import {createPost, updatePost} from '../../actions/posts'

const Form = ({currentId, setCurrentId}) => {
  const [postData, setPostData] = useState({
    creator: '', title: '', message: '', tags: '', selectedFile: ''
  });
   const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

   const dispatch = useDispatch();
   const classes = useStyles();

   useEffect(() =>{
    if(post) setPostData(post);
   }, [post]);

   

  return (
    <div>
      
    </div>
  )
}

export default Form
