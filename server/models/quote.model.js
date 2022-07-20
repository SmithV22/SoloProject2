
const mongoose = require('mongoose') ;

const QuoteSchema = mongoose.Schema(
    {
        quote: {
            type: String,
            required: [true, 'Please enter a quote'],
            minLength: [3, 'Quote must be at least 3 characters'],
        },
        authorFirstName: {
            type: String,
            required: [true, "Please enter an author's  first name"],
            minLength: [3, "Author's first name must be at least 3 characters"],
        },
        authorLastName: {
            type: String,
            required: [true, "Please enter an author's last name"],
            minLength: [3, "Author's  last name must be at least 3 characters"],
        },
        source: {
            type: String,
            reqired: [true, 'Please enter the source for the quote'],
            minLength: [3, 'Source must be at least 3 characters'],
        },
    },
    {
        timestamps: true
    }
) ;

const Quote = mongoose.model('Quote', QuoteSchema) ;
module.exports = Quote ;