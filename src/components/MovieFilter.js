import React, {useState, useRef, useEffect} from 'react'
import '../css/MovieFilter.css';

const MovieFilter = ({movies, filterMovie, resetFilter}) => {
    const [categories, setCategories] = useState([]);
    
    const selectedCategories = useRef();

    useEffect(()=>{
        const rawCategories=[];
        movies.map(movie=> rawCategories.push(movie.category));
        //indexOf: take the 1st appeared index of value in array
        let uniqueCategories = rawCategories.filter((value, index, self)=> self.indexOf(value) === index);
        setCategories(uniqueCategories);
    }, [movies])
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        filterMovie(selectedCategories.current.value);
    }


  return (
    <div className='main-filter-form'>
        <h2>Filter Movie</h2>
        <p>Filter by Category</p>
        <form onSubmit={handleSubmit}>
            <select multiple id="myMulti" name="myMulti[]" size='5' ref={selectedCategories} className='select-form'>
                {categories.map((category, index)=><option value={category} key={index} >
                    {category}
                    </option>
                )}
            </select>
            <div className='button-part'>
                <button type='submit' className='btn submit-button'>Find</button>
                <button type='button' onClick={resetFilter} className="btn reset-button">Reset</button>
            </div>
        </form>
        
    </div>
  )
}

export default MovieFilter