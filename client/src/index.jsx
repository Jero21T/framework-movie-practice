import React from 'react';
import ReactDOM  from 'react-dom';
import {Movie} from './components/Movie.jsx';


var movieData = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movieData
    }
  }

  render() {
    return (
      <ul>
        {this.state.movies.map(currentMovie =>
          <Movie movie={currentMovie} key={currentMovie.title} />)
        }
      </ul>
    )
  }
}


ReactDOM.render(<MovieList />, document.getElementById('app'));

