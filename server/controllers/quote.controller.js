
const Quote = require('../models/quote.model') ;
const mongoose = require('mongoose') ;

module.exports = {
    createQuote:  (req, res) => {
        Quote.create(req.body)
        .then((newPet) => {
            res.status(201).json(newPet) ;
        })
        .catch((err) => {
            res.status(400)
            .json({ message: 'Something went wrong in CREATE', error: err})
        })
    },

    getQuotes: (req, res) => {
        Quote.find({})
        .then((quote) => {
            res.json(quote) ;
        })
        .catch(err => {
            res.status(400)
            .json({ message: 'Something went wrong in GETALL', error: err }) ;
        })
    },
    
    getOneQuote: (req, res) => {
        const { id } = req.params ;

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Could not find quote') ;

        Quote.findOne({ _id: req.params.id })
        .then((quote) => {
            res.status(201).json(quote) ;
        })
        .catch(err => {
            res.status(400)
            .json({ message: 'Something went wrong in FINDONE', error: err }) ;
        })
    },

    updateQuote: (req, res) => {
        Quote.findByIdAndUpdate( req.params.id, req.body, { new: true, runValidators: true})
        .then((quote) => {
            res.json(quote) ;
        })
        .catch(err => {
            res.status(400)
            .json({ message: 'Something went wrong in UPDATE', error: err }) ;
        })
    },

    deleteQuote: (req, res) => {
        Quote.deleteOne({ _id: req.params.id })
        .then((quote) => {
            res.json(quote) ;
        })
        .catch(err => {
            res.status(400)
            .json({ message: 'Something went wrong in DELETE', error: err }) ;
        })
    },

} ;


