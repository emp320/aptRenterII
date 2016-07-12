/* eslint-disable no-use-before-define */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  name: { type: String,
          validate: { validator: uniqueNameValidator },
          required: true },
  sqft: { type: Number,
          min: 500,
          max: 2500 },
  rooms: { type: Number,
                min: 1,
                max: 4 },
  rent: { type: Number,
          min: 1000 },
  deposit: { type: Number,
              min: 50 },
  collectedRent: { type: Number,
                    min: 0 },
  rentDue: { type: Number,
              required: true,
              default: 1,
            min: 1,
            max: 28 },
  lateFee: { type: Number,
              min: 10 },
  renter: { type: mongoose.Schema.ObjectId, ref: 'Renter' },
  dateCreated: { type: Date, default: Date.now },
});

function uniqueNameValidator(name, cb) {
  return cb(true);
}

module.exports = mongoose.model('Apartment', apartmentSchema);
