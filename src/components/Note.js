import React, {Component, createRef} from 'react';
import '../css/Note.css';
import PropTypes from 'prop-types';

class Note extends Component {
  constructor(props) {
    super(props);
     this.titleContent = createRef();
     this.bodyContent = createRef();
     this.state = {
      title: this.props.title,
      body: this.props.body,
      editMode: false
    }
  }

  handleEdit= () => {
    this.setState({
      editMode: true
    });
  }

  handleSave = () => {
    this.props.saveHandler(this.props.id, this.titleContent.current.value, this.bodyContent.current.value)
    this.setState({
      title: this.titleContent.current.value,
      body: this.bodyContent.current.value,
      editMode: false
    });
  }


  render() {
    return (
   	 <div className='col-sm-6'>
    	<div className="card card-view">
        {
          //use ternary operator to replace use of JS before the return
          this.state.editMode ?
            (
              <div className="card-body">
                <textarea ref={this.titleContent} className="title-textarea" defaultValue={this.state.title}></textarea>
                <textarea ref={this.bodyContent} className="body-textarea" defaultValue={this.state.body}></textarea>
                <div><button className="btn btn-primary" onClick={this.handleSave}>Save</button></div>
              </div>
            )
            :
            (
              <div className="card-body">
                <h5 className="card-title">{this.state.title}</h5>
                <p>{this.state.body}</p>
                <div>
                  <button className="btn btn-info" onClick={this.handleEdit}>Edit</button><button className="btn btn-danger" onClick={()=>this.props.deleteHandler(this.props.id)}>Delete</button>
                </div>
              </div>
            )
        }
  		</div>
 	 </div>
    );
  }
}


Note.propTypes = {
  title: PropTypes.string
};

Note.defaultProps = {
  title: "A cool title",
  body: "A cool body",
};



export default Note;