import React, {Component} from 'react';
import '../css/Board.css';
import Note from './Note';


class Board extends Component {
  constructor () {
    super();

    this.state = {
      notes: []
    };
  }

  addNote = () => {
    let notes = this.state.notes;
    notes.push(
      {
        id: Date.now(),
        title: "New Note Title",
        body: "New Note body"
      }
    );
    this.setState({ notes });
  }

  deleteNote = (id) =>{
    let notes = this.state.notes;
    //disable eslint check so that warning is eliminated in the terminal
    // eslint-disable-next-line    
    notes.map((note, index) => {
      if (id === note.id) {
        notes.splice(index,1);
      }
    });
    this.setState({ notes });
  }

  // saveNote is used to update notes state with current values
  // from editing in Note.js
  saveNote = (id, title, body) => {
    console.log(id, title, body)
    let notes = this.state.notes;
    //disable eslint check so that warning is eliminated in the terminal
    // eslint-disable-next-line
    notes.map((note, index) => {
      if (id === note.id) {
        notes[index].title = title;
        notes[index].body = body;
      }
    });

    this.setState({ notes });
  }
  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            {this.state.notes.map(note => {
              return <Note key={note.id} id={note.id} deleteHandler={this.deleteNote} saveHandler={this.saveNote} />
            })}
          </div>
        </div>
        <div>
          <button className="btn btn-success add-button" onClick={this.addNote}>Add</button>
        </div>
      </div>
    );
  }
}

export default Board;