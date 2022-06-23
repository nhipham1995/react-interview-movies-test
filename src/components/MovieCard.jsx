import React, {useState} from 'react'
import '../css/MovieCard.css';

const MovieCard = ({movie, deleteMovie}) => {
    const [like, setLike] = useState(movie.likes);
    const [dislike, setDislike] = useState(movie.dislikes);
    //toggle like or dislike
    const [toggle, setToggle] = useState(0);

    //handle the toggle like button
    const likeClick = () =>{
        if(toggle){
            setLike(like-1);
            setToggle(0);
        } else if(toggle === 0){
            setToggle(true);
            setLike(like+1);
        } else {
            setToggle(true);
            setLike(like+1);
            setDislike(dislike-1)
        }
    }
    //handle the toggle dislike button
    const dislikeClick = () => {
        if(toggle){
            setDislike(dislike+1);
            setLike(like-1);
            setToggle(false)
        } else if(toggle === 0){
            setDislike(dislike+1);
            setToggle(false)
        } else {
            setDislike(dislike-1);
            setToggle(0)
        }
    }

    return (
        <div  className='film-card'
              style={{backgroundImage: `url(${movie.url})`}}>
            <div className='info-section'>
                <div className='card-header'>
                    <h2>{movie.title}</h2>
                    <p className='category'>{movie.category}</p>
                </div>
                <div className='delete-movie'>
                    <button 
                        className='delete-button'
                        onClick={e=>deleteMovie(movie.id)}
                        >Delete</button>
                </div>
                <div className='evaluation-part'>
                    <ul>
                        <li onClick={likeClick} 
                            className={toggle ? 'clicked-class': 'unclicked-class'}>
                            <i className="fas fa-thumbs-up">
                                {like && <p className='like-number'>{like}</p>}
                            </i
                        ></li>
                        <li onClick={dislikeClick} 
                            className={toggle===false ? 'clicked-class': 'unclicked-class'}>
                            <i className="fas fa-thumbs-down">
                                {dislike && <p className='dislike-number'>{dislike}</p>}
                            </i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default MovieCard