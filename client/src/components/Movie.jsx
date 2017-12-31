import React from 'react';


const Movie = (props) => (
	<li>
<span>{props.movie.title}
</span>
<button>Watched</button>
</li>
)

export default Movie
