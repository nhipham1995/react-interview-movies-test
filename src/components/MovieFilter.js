import React, {useState, useEffect} from 'react'
import '../css/MovieFilter.css';

const MovieFilter = ({movies, filterMovie, resetFilter}) => {
    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(()=>{
        const rawCategories=[];
        movies.map(movie=> rawCategories.push(movie.category));
        //take only unique categories in data
        let uniqueCategories = rawCategories.filter((value, index, self)=> self.indexOf(value) === index);
        setCategories(uniqueCategories);
    }, [movies])
    
    //click filter button => filter action
    const handleSubmit = (e)=>{
        e.preventDefault();
        filterMovie(selected);
        setSelected([]);
    }

    //click filtering category options
    const handleChange = (e)=>{
        setSelected([...selected, e.target.value]);
    }

  return (
    <div className='main-filter-form'>
        <h2>Filter Movie</h2>
        <p>Filter by Category</p>
        <form onSubmit={handleSubmit}>
            <select multiple
                    id="myMulti" 
                    name="myMulti[]" 
                    size='5' 
                    className='select-form'
                    onChange={handleChange}>
                        {categories.length && categories.map((category, index)=>(
                            <option value={category} 
                                    key={index}
                                    disabled={(selected.indexOf(category)>-1) ? true:false}
                            >
                                {category}
                            </option>)
                        )}
            </select>
            <div className='button-part'>
                <button type='submit' className='btn submit-button'>Filter</button>
                <button type='button' onClick={resetFilter} className="btn reset-button">Reset</button>
            </div>
        </form>
        
    </div>
  )
}

export default MovieFilter