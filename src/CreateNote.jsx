import react, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote=(props)=>{

    const [note, setNote]= useState({
        title:"",
        content:"",
    });

    const InputEvent=(eventy)=>{
        

        const {name,value}= eventy.target;

        setNote((preData)=>{
            return {
                ...preData,
                [name]:value,

            };
        });
        console.log(note);
    };


    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        })

    };


    return(
        <>
        <div className="main_note">
            <form>
                <input
                    type='text'
                    name="Title"
                    placeholder='Title'
                    onChange={InputEvent}
                    value={note.title}
                    
                />
                    <textarea 
                    rows="" 
                    column="" 
                    name='content'
                    placeholder='Write a note...'
                    onChange={InputEvent}
                    value={note.content}
                    
                    />
                    <Button onClick={addEvent}
                    variant="contained" color="success">
                    <AddIcon className='plus_sign'/>
                    </Button>
            </form>
        </div>
        </>
    )
};

export default CreateNote; 