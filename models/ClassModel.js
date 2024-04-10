const mongoose = require('mongoose')

const ClassSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required: true,
            minLength : 5,
            maxLength: 10
        },
        quantity: {
            type: Number,
            required: true,
            min: 15,
            max: [40, 'Max quantity for 1 class is 40 students']
        }
    }
);

const ClassModel = mongoose.model("classes", ClassSchema);
module.exports = ClassModel;

