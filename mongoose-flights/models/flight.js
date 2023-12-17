const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airports = ['AUS', 'DFW', 'DEN', 'GRR', 'LAX', 'SAN']
const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: airports,
    },
    arrival: {
        type: Date
    }
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },
    airport: {
        type: String,
        enum: airports,
        default: 'GRR'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function() {
            return new Date()
        }
    },
    destinations: [destinationSchema]
    
},{
    timestamps: true,
});

module.exports = mongoose.model('Flight', flightSchema);