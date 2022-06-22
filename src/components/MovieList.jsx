import React, {useState, useEffect} from 'react';
import {movies$} from '../data/movies';
import {MovieCard, MovieFilter, Pagination} from '.';
import '../css/MovieList.css';

const FilmCard = () => {
    const [movies, setMovies] = useState([]);

    //reset list movies after filter search
    const [reset, setReset] = useState(false);
    //show|hide the number of filtered movies
    const [toggle, setToggle] = useState(false);


    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(6);
    const indexOfLastMovie = currentPage*moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);


    useEffect(()=>{
        movies$.then(movies=> setMovies(movies));
    }, [reset])

    const deleteMovie = (id)=>{
        //delete movie with its id=>rerender
        setMovies(movies.filter(movie=>movie.id !== id));
    }
    const filterMovie = (categories)=>{
        const results = movies.filter(movie=> categories.indexOf(movie.category) !== -1);
        setMovies(results);
        setToggle(true);
    }
    const resetFilter = ()=>{
        setReset(!reset);
        setToggle(false)
    }
    const clickedPage = (pageNum)=>{
        console.log(pageNum);
        if(pageNum<1 || pageNum > Math.ceil(movies.length/moviesPerPage)){
            console.error('out of page')
            return;
        }
        setCurrentPage(pageNum);
    }

    const inputChangeHandle = (e)=>{
        console.log(e.target.value);
        const result = e.target.value;
        if(result > 3 && result <11 ){
            setMoviesPerPage(e.target.value);
        } else {
            console.log("invalid input")
        }
    }
    return (
    <div>
        <h2 className='title-list-movie'>All the films</h2>
        <div className='pagination-main'>
            <Pagination 
                totalMovies={movies.length} 
                moviesPerPage={moviesPerPage} 
                clickedPage={clickedPage}
                currentPage={currentPage}
            />
            <div className='choose-num-movies-per-page'>
                <h4>Choose {' '}
                    <span>
                        <input type="number" min="4" max="10" 
                                onChange={inputChangeHandle}
                                className="number-movies-input"/>
                    </span>
                    {' '}movies to show per page
                </h4>
                <p className='plus-info'>(4-10 movies/page).</p>
            </div>
        </div>
        <div className='main'>
            <div className='movies-list'>
                {currentMovies.map(movie=><MovieCard 
                                            movie={movie} 
                                            deleteMovie={deleteMovie} 
                                            key={movie.id} />)}
            </div>
            <div className='filter-part'>
              <MovieFilter movies={movies} 
                           filterMovie={filterMovie} 
                           resetFilter={resetFilter} />
              {toggle && <div className='result-msg'>There are <span className='result-num'>{movies.length}</span>  results</div>}
            </div>
        </div>
       
    </div>
  )
}

export default FilmCard