
const mongoose = require('mongoose') ;

const JournalSchema = mongoose.Schema(
    {
        entry: {
            type: String,
            required: [true, 'Please enter an entry'],
            minLength: [5, 'Entry must be at least 5 characters'],
        },
        writtenBy: {
            type: String,
            minLength: [3, 'Entry must be at least 3 characters'],
        },
        quoted: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Quote',
        }
    },
    {
        timestamps: true
    }
) ;

const Journal = mongoose.model('Journal', JournalSchema) ;
module.exports = Journal ;