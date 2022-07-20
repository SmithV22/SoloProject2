
const express = require('express') ;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors') ;

//import quoteRoutes from './routes/quote.js' ;
//import journalRoutes from './routes/journal.js' ;

const app = express() ;

app.use(cors()) ;
app.use(bodyParser.json({ limit: '30mb', extended: true })) ;
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true })) ;

require('./config/mongoose.config') ;
require('./routes/quote.routes')(app) ;
require('./routes/journal.routes')(app) ;

const server = app.listen(8000, () => {
    console.log('Listening at Port 8000!')
})
//mongoose.connect( { useNewUrlParser: true, useUnifiedTopology: true }) 
//    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//    .catch((error) => console.log(error.message)) ;

