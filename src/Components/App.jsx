import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
  

function App(){
   
    const [notes, setNotes]= useState([]);

    function handleAddButton(newNote){
       

        setNotes((prevItems) => {
            return [...prevItems, newNote];
          });
        }
    
        function deleteNote(id){ 
             setNotes((pi) => {
                 return pi.filter((noteItem, index) => {
                 return index !== id;
               });
             });

            
          }



    return <div>
    <Header />
    <CreateArea 
     onAdd = {handleAddButton}   
    />
  {  notes.map((noteItem, index) => {
    return <Note 
        id = {index}
        key = {index}
        title = {noteItem.title}
        content = {noteItem.content}
        onDelete= {deleteNote}
    />
    })}
    <Footer />
    </div>
    }
    
    export default App;
