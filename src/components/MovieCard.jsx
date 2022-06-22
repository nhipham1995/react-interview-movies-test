import React, {useState, useEffect} from 'react'
import '../css/MovieCard.css';

const MovieCard = ({movie, deleteMovie}) => {
    const [like, setLike] = useState();
    const [dislike, setDislike] = useState();
    const [toggle, setToggle] = useState(Boolean);
    useEffect(()=>{
        setLike(movie.likes);
        setDislike(movie.dislikes);
        setToggle(0);
    },[])

    const deleteClickHandler = ()=>{
        deleteMovie(movie.id)
    }
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
        <div  className='film-card' style={{backgroundImage: `url(${movie.url})`}}>
            <div className='info-section'>
                <div className='card-header'>
                    <h2>{movie.title}</h2>
                    <p className='category'>{movie.category}</p>
                </div>
                <div className='delete-movie'>
                    <button 
                        className='delete-button'
                        onClick={deleteClickHandler}
                        >Delete</button>
                </div>
                <div className='evaluation-part'>
                    <ul>
                        <li onClick={likeClick} className={toggle ? 'clicked-class': 'unclicked-class'}>
                            <i className="fas fa-thumbs-up">
                                {like && <p className='like-number'>{like}</p>}
                            </i
                        ></li>
                        <li onClick={dislikeClick} className={toggle===false ? 'clicked-class': 'unclicked-class'}>
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