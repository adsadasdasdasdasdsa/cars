const mongoose =require('mongoose');

const carsSchema = new mongoose.Schema({
    cars: [
        {
            name: { type: String, required:true },
            number: { type: String, required:true },
            pic: { type: String, required:false }
        }
    ]
})

module.exports = mongoose.model('Cars', carsSchema);