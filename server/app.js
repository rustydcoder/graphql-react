const express = require('express'),
   port = 4000,
   app = express();

app.listen(port, () => console.log(`now listening for request at port ${port}`))