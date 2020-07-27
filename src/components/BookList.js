import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
   query {
      books {
         name
         id
      }
   }
`


class BookList extends Component {

   DisplayBooks() {
      const { loading, error, books } = this.props.data
      if (loading) return <li>Loading...</li>
      if (error) return <li>Error: Something went wrong</li>

      return books.map(({ name, id }) => <li key={id}> {name} </li>)
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
