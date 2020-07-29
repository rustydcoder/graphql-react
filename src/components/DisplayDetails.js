import React from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries';

const DisplayDetails = props => {

   const { book } = props.data;

   return (

      <div id="book-details">
         {
            book &&
            <div>
               <h2>{book.name}</h2>
               <p>{book.genre}</p>
               <p>{book.author.name}</p>

               <h4>All Books By {book.author.name}</h4>
               <ul className='other-books'>
                  {
                     book.author.books.map(({ name, id }) => <li key={id}> {name} </li>)
                  }
               </ul>
            </div>
         }

         {
            !book && <div>No book selected...</div>
         }
      </div>

   )
}

export default graphql(getBookQuery, {
   options: props => ({
      variables: { id: props.bookId }
   })
})(DisplayDetails)