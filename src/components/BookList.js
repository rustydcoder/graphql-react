import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries'

class BookList extends Component {

   DisplayBooks() {
      const { loading, error, books } = this.props.data
      if (loading) return <li>Loading...</li>
      if (error) return <li>Error: Something went wrong</li>

      return books.map(({ name, id }) =>
         <li key={id}> {name} </li>
      )
   }

   render() {
      return (
         <div>
            <ul id="book-list">
               {this.DisplayBooks()}
            </ul>
         </div>
      )
   }

}

export default graphql(getBooksQuery)(BookList)
