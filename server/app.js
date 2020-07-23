const express = require('express'),
   { graphqlHTTP } = require('express-graphql'),
   schema = require('./schema/schema'),
   mongoose = require('mongoose'),
   port = 4000,
   app = express();

mongoose.connect('mongodb+srv://new-user_01:testing123@cluster0.xgvoc.mongodb.net/graphqldb?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true
})

mongoose.connection
   .once('open', () => console.log('Connected to database'))
   .on('error', err => console.log('Connection Error: ' + err))


app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: true
}))

app.listen(port, () => console.log(`now listening for request at port ${port}`))