import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button } from '@mui/material';

const Note=(props)=>{

  const deleteNote=()=>{
    props.deleteItem(props.id);
  }


  return(
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br/>
        <p>{props.content}</p>
        <Button>
        <DeleteOutlineIcon onClick={deleteNote}
        className='del_icon' color='danger'/>
        </Button>


      </div>
    </>
  )
};

export default Note;