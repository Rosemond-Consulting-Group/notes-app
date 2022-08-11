import React, {useState} from 'react';
import '../css/Note.css';

const Note = (props) => {
  console.log("props = "+ JSON.stringify(props))
  const [title, setTitle] = useState(props.note.title);
  const [body, setBody] = useState(props.note.body);
  const [editMode, setEditMode] = useState(false);

  const handleEdit= () => {
    setEditMode(true);
  }

  const handleTitleChange = (event) => {
     setTitle(event.target.value)
  }

   const handleBodyChange = (event) => {
     setBody(event.target.value)
  }

  const handleSave = () => {
    props.saveHandler(props.note.id,title, body)
    setTitle(title);
    setBody(body);
    setEditMode(false);
  }

  return (
   	 <div className='col-sm-6'>
    	<div className="card card-view">
        {
          //use ternary operator to replace use of JS before the return
          editMode ?
            (
              <div className="card-body">
                <textarea onChange={handleTitleChange} className="title-textarea" defaultValue={title}></textarea>
                <textarea onChange={handleBodyChange} className="body-textarea" defaultValue={body}></textarea>
                <div><button className="btn btn-primary" onClick={handleSave}>Save</button></div>
              </div>
            )
            :
            (
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>{body}</p>
                <div>
                  <button className="btn btn-info" onClick={handleEdit}>Edit</button><button className="btn btn-danger" onClick={()=>props.deleteHandler(props.note.id)}>Delete</button>
                </div>
              </div>
            )
        }
  		</div>
 	 </div>
  );

}


export default Note;