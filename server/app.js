const express = require('express'),
   { graphqlHTTP } = require('express-graphql'),
   schema = require('./schema/schema'),
   mongoose = require('mongoose'),

   port = 4000,
   app = express();

mongoose.connect('mongodb+srv://new-user_01:testing123@cluster0.xgvoc.mongodb.net/graphql-reactdb?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true
})

mongoose.connection
   .once('open', () => console.log('Successfully connected to database'))
   .on('error', err => console.log('Connection Error: ' + err))


app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: true
}))

app.listen(port, () => console.log(`GraphQL API is now running at http://localhost:${port}/graphql`))