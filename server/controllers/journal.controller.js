
const Journal = require('../models/journal.model') ;
const QuoteController = require('../controllers/quote.controller') ;
const Quote = require('../models/quote.model') ;

const mongoose = require('mongoose') ;



module.exports = {
    createJournal:  (req, res) => {
        let quoted = (req.params.id) ;
        Journal.create(req.body)
        .then((newJournal) => {
            res.status(201).json(newJournal) ;
        })
        .catch((err) => {
            res.status(400)
            .json({ message: 'Something went wrong in CREATE', error: err})
        })
    },

    getJournals: (req, res) => {
        Journal.find({})
        .populate({
            path: 'quoted',
            pupulate: {
                path: 'quote',
                path: 'author',
            }
        })
        .then((journal) => {
            res.json(journal) ;
        })
        .catch(err => {
            res.status(400)
            .json({ message: 'Something went wrong in GETALL', error: err }) ;
        })
    },
    
    getOneJournal: (req, res) => {
        const { id } = req.params ;

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Could not find journal') ;

        Journal.findOne({ _id: req.params.id })
        .then((journal) => {
            res.status(201).json(journal) ;
        })
        .catch(err => {
            res.status(400)
            .json({ message: 'Something went wrong in FINDONE', error: err }) ;
        })
    },

    updateJournal: (req, res) => {
        Journal.findByIdAndUpdate( req.params.id, req.body, { new: true, runValidators: true})
        .then((journal) => {
            res.json(journal) ;
        })
        .catch(err => {
            res.status(400)
            .json({ message: 'Something went wrong in UPDATE', error: err }) ;
        })
    },

    deleteJournal: (req, res) => {
        Journal.deleteOne({ _id: req.params.id })
        .then((journal) => {
            res.json(journal) ;
        })
        .catch(err => {
            res.status(400)
            .json({ message: 'Something went wrong in DELETE', error: err }) ;
        })
    },

}


