const mongoose = require('mongoose');

const {model, Schema} = mongoose;

const tamuSchema = new Schema({
    namaTamu: {
        type: String,
        minlength: [3, 'Panjang nama tamu minimal 3 karakter'],
        required: [true, 'Nama tamu harus di isi'],
        unique: true,
    },
    undianUmroh:{
        type: Boolean,
        required: true
    },
    undianDoorPrize:{
        type: Boolean,
        required: true
    },
    keteranganTamu: {
        type:Number,
        required: true
    },
    notes:{
        type: String
    },
    statusCheckin:{
        type:Boolean,
    },
    umur: {
        type: Number,

    }
}, {timestamps: true})

module.exports = model('tamu', tamuSchema);
