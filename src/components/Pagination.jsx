import React, {useState} from 'react';
import '../css/Pagination.css';


const Pagination = ({totalMovies, moviesPerPage, clickedPage, currentPage}) => {
    const [activePage, setActivePage] = useState(currentPage);

    let pageNumber=[];
    for(let i=1; i<= Math.ceil(totalMovies/moviesPerPage);i++){
        pageNumber.push(i);
    }

  return (
    <div>
        <div>
            <ul className='pagination'>
                <li className='page-item'>
                    <i className="fas fa-angle-left angle" 
                       onClick={e=>clickedPage(currentPage-1)}>
                    </i>
                </li>
                {pageNumber.map(page=>(
                    <li className={`page-item ${(page===activePage) ? 'active': null}`} key={page}>
                        <a href='!#' 
                           className={`page-link ${(page===activePage) ? 'active': null}`}
                           onClick={e=>{
                               clickedPage(page);
                               setActivePage(page);
                            }}> 
                        {page}
                        </a>
                    </li>
                ))}
                <li className='page-item'>
                    <i className="fas fa-angle-right angle"
                        onClick={e=>clickedPage(currentPage+1)}>
                    </i>
                </li>
            </ul>
        </div>
    </div>
    
  )
}

export default Pagination