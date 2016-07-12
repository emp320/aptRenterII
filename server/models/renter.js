import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const renterSchema = new Schema({
  name: { type: String,
          minlength: 2,
          required: true },
  money: { type: Number,
           min: 1001 },
  complaints: { type: Number,
                min: 0,
                max: 3 },
  apartment: { type: mongoose.Schema.ObjectId, ref: 'Apartment' },
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Renter', renterSchema);
