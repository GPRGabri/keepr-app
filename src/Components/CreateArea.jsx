import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function CreateArea(props) {

  const[expand, setExpand]=useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    
    function handleChange(event){
        const {name,value} = event.target;
        
        setNote((pi)=> {
                return {
                    ...pi, 
                    [name] : value
                } 
        })

    }

    function submitNote(event){
        props.onAdd(note);
        event.preventDefault();
        setNote({title: "",
        content: ""});
    }

function expandNote(){
    setExpand(true);
}


  return (
    <div>
      <form className="create-note">
        {expand ? <input value={note.title} onChange={handleChange} name="title" placeholder="Title" style= {{display : expand ? "block" :"None"}} />: null}
        <textarea onClick={expandNote} value={note.content} onChange={handleChange} name="content" placeholder="Take a note..." rows= {expand ? "3": "1" }/>
        <Zoom in={expand}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;