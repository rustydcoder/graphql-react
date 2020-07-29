import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries'
import DisplayDetails from './DisplayDetails';


class BookList extends Component {
   constructor(props) {
      super(props)
      this.state = {
         selected: null
      }
   }

   DisplayBooks() {
      const { loading, error, books } = this.props.data
      if (loading) return <li>Loading...</li>
      if (error) return <li>Error: Something went wrong</li>

      return books.map(({ name, id }) =>
         <li onClick={e => this.setState({ selected: id })} key={id}> {name} </li>
      )
   }

   render() {
      return (
         <div>
            <ul id="book-list">
               {this.DisplayBooks()}
            </ul>

            <DisplayDetails bookId={this.state.selected} />

         </div>
      )
   }

}

export default graphql(getBooksQuery)(BookList)
