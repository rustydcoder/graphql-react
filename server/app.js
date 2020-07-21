const express = require('express'),
   { graphqlHTTP } = require('express-graphql'),
   schema = require('./schema/schema'),
   port = 4000,
   app = express();

app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: true
}))

app.listen(port, () => console.log(`now listening for request at port ${port}`))