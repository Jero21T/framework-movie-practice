import React from 'react';
import $ from 'jquery';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: 'unseen',
    }
  }


  toggleMovie () {
  	 if (this.state.watched === 'unseen'){
  	 	this.setState({watched: 'seen'})
        this.props.isWatched(this.props.movie)
     }else{
     	this.setState({watched: 'unseen'})
        this.props.isUnWatched(this.props.movie)
     }
  }

 



  render() {
    return (
    <li>
      <span>{this.props.movie.title}</span>
      <button  onClick={this.toggleMovie.bind(this)}>{this.state.watched}</button>
    </li>
    )
  }
}


export default Movie