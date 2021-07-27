import { React, useState } from 'react';
import { List, ListItem, ListItemText, Modal } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import './Todo.css';
import db from './firebase';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
    };

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true })
        setOpen(false);

    }

    return (
        <>
        <Modal
            open={open}
            onClose={ e => setOpen(false)}>

            <div className={classes.paper}>

                <CloseIcon onClick={e => setOpen(false)} />
                <input value={input} onChange={event => setInput(event.target.value)} placeholder={props.todo.todo}/>
                <EditIcon onClick={updateTodo} />

            </div>

        </Modal>

        <List className="todoList">

            <ListItem>
                <ListItemText primary={props.todo.todo}/>
            </ListItem>

            <EditIcon onClick={e => setOpen(true)} />

            <DeleteOutlineIcon onClick={ event => db.collection('todos').doc(props.todo.id).delete() }/>

        </List>
        </>
    )
}

export default Todo
