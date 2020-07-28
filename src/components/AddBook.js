import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries'

class AddBook extends Component {
   constructor(props) {
      super(props)
      this.state = {
         name: '',
         genre: '',
         authorId: ''
      }
   }

   displayAuthors() {
      const { loading, error, authors } = this.props.getAuthorsQuery
      if (loading) return <option disabled>Loading...</option>
      if (error) return <option disabled>Error: Something went wrong</option>

      return authors.map(({ name, id }) =>
         <option key={id} value={id}> {name} </option>
      )
   }

   submitForm(e) {
      e.preventDefault();

      const { name, genre, authorId } = this.state

      this.props.addBookMutation({
         variables: { name, genre, authorId },
         refetchQueries: [{ query: getBooksQuery }]
      })
   }

   render() {
      return (
         <form onSubmit={this.submitForm.bind(this)} id='add-book'>

            <div className='field'>
               <label>Book Name:</label>
               <input type='text' onChange={e => this.setState({ name: e.target.value })} />
            </div>

            <div className='field'>
               <label>Genre:</label>
               <input type='text' onChange={e => this.setState({ genre: e.target.value })} />
            </div>

            <div className='field'>
               <label>Author:</label>
               <select onChange={e => this.setState({ authorId: e.target.value })}>
                  <option value='' disabled>Select author</option>
                  {this.displayAuthors()}
               </select>
            </div>

            <button type='submit'>+</button>

         </form>
      )
   }

}

export default compose(
   graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
   graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook)