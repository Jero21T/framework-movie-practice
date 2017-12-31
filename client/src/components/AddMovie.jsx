import React from 'react';


class addMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    }
  }

  handleTitleChange (event) {
    this.setState({
      title: event.target.value
    })
  }

  handleButtonClick (){
  	this.props.updateMovieList(this.state.title);
  }

  render() {
    return (
      <div>
        <input placeholder="Add a Movie Title here" onChange={this.handleTitleChange.bind(this)} />
        <button onClick = {this.handleButtonClick.bind(this)}>Add Movie</button>
      </div>
    )
  }
}


export default addMovie