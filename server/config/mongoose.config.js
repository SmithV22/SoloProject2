
const mongoose = require('mongoose') ;
const soloProjectDb = 'soloProjectDb' ;

mongoose.connect(`mongodb://localhost/${ soloProjectDb }`, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDb') 
    }) 
    .catch((err) => {
        console.log('DB Connection Error', err) ;
    }) ;