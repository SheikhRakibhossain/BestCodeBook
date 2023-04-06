import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    return (
        <Link to={`../book/${book.isbn13}`}>
        <div>
            <div className='p-2 overflow-hidden relative duration-1000 transform hover:-translate-y-2'>
                            <img src={book.image} alt="Book Cover" className='object-cover w-full h-56 md:h-64 xl:h-80' />

                            <div className='absolute inset-0 bg-black bg-opacity-70 rounded text-white p-5 opacity-0 hover:opacity-100 cursor-pointer duration-1000'>
                              <p className=' text-2xl bold py-3'>{book.title}</p>
                              <p>{book.subtitle.substring(0, 30)}...</p>  
                              <p className=''>Price: {book.price}</p>  
                            </div>
                        </div>

        </div>
        </Link>
    );
};

export default Book;