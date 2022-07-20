
const QuoteController = require('../controllers/quote.controller') ;

module.exports = (app) => {
    app.post('/api/quotes', QuoteController.createQuote) ;
    app.get('/api/quotes', QuoteController.getQuotes) ;
    app.get('/api/quotes/:id', QuoteController.getOneQuote) ;
    app.put('/api/quotes/:id', QuoteController.updateQuote) ;
    app.delete('/api/quotes/:id', QuoteController.deleteQuote) ;
    
} ;