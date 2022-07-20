
const JournalController = require('../controllers/journal.controller') ;

module.exports = (app) => {
    app.post('/api/journals', JournalController.createJournal) ;
    app.get('/api/journals', JournalController.getJournals) ;
    app.get('/api/journals/:id', JournalController.getOneJournal) ;
    app.put('/api/journals/:id', JournalController.updateJournal) ;
    app.delete('/api/journals/:id', JournalController.deleteJournal) ;
} ;