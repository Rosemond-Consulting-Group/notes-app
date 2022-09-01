import React, {useState, useEffect} from 'react';
import '../css/Board.css';
import Note from './Note';
import Header from './Header';
import Footer from './Footer';
import { db, logout } from "../firebase";
import { ref, set, update, remove, onValue } from "firebase/database";
import { doc, setDoc } from "firebase/firestore"; 



const Board = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    return onValue(ref(db, '/notes'), querySnapShot => {
      let data = querySnapShot.val() || [];
      console.log("data from rt db load is: "+ JSON.stringify(data), Object.values(data));
      setNotes(Object.values(data));
    });
  }, []);

  //use the spread(...) operator to add the new note to the end of the array
  const addNote = () => {
    let updatedNote =
    {
      id: Date.now(),
      title: "New Note Title",
      body: "New Note body"
    };

    set(ref(db, 'notes/' + updatedNote.id), updatedNote);
    setNotes([...notes, updatedNote] );
  }

  //deleteNote filter out the note that matches the id passed in
  const deleteNote = (id) => {
    remove(ref(db, 'notes/' + id))
    setNotes( notes.filter(note => note.id !== id ));
  }

  // saveNote is used to update notes state with current values
  // from editing in Note.js, use the spread(...) operator 
  // tio set note then pass in updated fields
  const saveNote = (id, title, body) => {
    //disable eslint check so that warning is eliminated in the terminal
    // eslint-disable-next-line
    const updatedNotes = notes.map((note) => {
      if (id === note.id) {
        update(ref(db, 'notes/'+ id),{ title, body});
        return {...note, title, body }
      }
    });

    console.log("updated note = " + JSON.stringify(updatedNotes));
    setNotes( updatedNotes );
  }

  return (
    <div>
        <Header />
        <div className="div-board">
          <div className="row">
          {notes.map((note) => {
            return <Note key={note.id} note={note} deleteHandler={deleteNote} saveHandler={saveNote} />
            })}
          </div>
        </div>
        <div>
        <button className="btn btn-success add-button" onClick={addNote}>Add</button>
        <button className="btn btn-success logout-button" onClick={logout}>Logout</button>
      </div>
      <Footer />
      </div>
  );

}

export default Board;