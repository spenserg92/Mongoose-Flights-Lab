const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'GRR', 'LAX', 'SAN'],
        default: 'GRR'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: ()=>{
            const yearFromNow = new Date();
            yearFromNow.setFullYear(yearFromNow.getFullYear() + 1);
            return yearFromNow;
        }
    },
    
},{
    timestamps: true,
});

module.exports = mongoose.model('Flight', flightSchema);