import React, { Component, useState } from 'react'
import './style/card.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

export const AddBook = ({book}) => {
    const [title,setTitle]=useState("")
    const [price,setPrice]=useState("")
    
    const handleSubmit=(e)=>{
        e.preventDefault()
         book(title,price)
    }
    const classes = useStyles();
    return <>
    <div className="form-card" style={{boxShadow:"4px 4px 4px gray"}}>
        <form onSubmit={handleSubmit} className={classes.root}>
            <div className="form-group">
                <TextField id="outlined-basic" label="Book title" variant="outlined" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
            </div>

            <div className="form-group">
            <TextField id="outlined-basic" label="Book price" variant="outlined" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
            </div>

            <div className="form-group">
            <Button variant="contained" color="secondary" type="submit">
  Add Book
        </Button>
            </div>
        </form>
    </div>
    </>
}
