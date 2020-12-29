import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    paperroot: {
      padding : 4,
      margin:2
    },
    formroot: {
      padding : 4,
      margin:2
    },
  }));

  
const NewTodo = () => {
    const classes = useStyles();

    return (<Paper className={classes.paperroot}> 
                <form className={classes.formroot} noValidate autoComplete="off">
                      <TextField id="standard-basic" label="Enter Todo" />
                      <Button variant="contained" color="primary" style={{ margin : 10 }} > ADD </Button>
                </form>
           </Paper>
    )
}



export default NewTodo;