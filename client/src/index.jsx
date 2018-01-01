import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/addMovie.jsx';


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
      movies: movieData,
      inputMovie: ''
    }
  }

  handleButtonClick () {
    for (var i=0;i<movieData.length;i++){
      if (movieData[i].title===this.state.inputMovie){
        this.setState({movies: [{title:this.state.inputMovie}] })
        return;
      }
    }
    this.setState({movies: [{title: 'No match found'}]})
  }

  handleChange (event) {
      this.setState({inputMovie: event.target.value})
  }

  fetchMovieData(addedMovie){
  for (var i=0; i<movieData.length;i++){
    if (movieData[i].title===addedMovie){
      this.setState({movies: movieData})
      return;
    }
  }
   movieData.push({title: addedMovie});
   this.setState({movies: movieData})
  }

 
  isWatched(movie){
   return true
  }

  isUnWatched(movie){
   
  }

  displayWatched(){
  var filteredWatched = movieData.filter(function(movie){
    return isWatched(movie)
  })

  this.setState({movies: filteredWatched})
  }

  displayUnWatched(){
  
  }

  render() {
    return (
      <div>
      <AddMovie movieData={movieData} updateMovieList={this.fetchMovieData.bind(this)}  />
      <Search handleButtonClick={this.handleButtonClick.bind(this)} handleChange={this.handleChange.bind(this)}  />
      <button onClick={this.displayWatched.bind(this)}>Watched</button>
      <button onClick={this.displayUnWatched.bind(this)}>to Watch</button>
      <ul>
        {this.state.movies.map(currentMovie =>
          <Movie movie={currentMovie} key={currentMovie.title} isWatched={this.isWatched.bind(this)} isUnWatched={this.isUnWatched.bind(this)} />)
        }
      </ul>
      </div>
    )
  }
}


ReactDOM.render(<MovieList />, document.getElementById('app'));

