/* eslint-disable no-unused-expressions, no-underscore-dangle */
const Renter = require('../../dst/models/renter');
const Apartment = require('../../dst/models/apartment');

const expect = require('chai').expect;
//const sinon = require('sinon');


describe('Renter', () => {
  describe('constructor', () => {
    it('does create a renter object', (done) => {
      const renter = new Renter({ name: 'Joe Irons', money: 40000, complaints: 0 });
      renter.validate(err => {
        expect(err).to.be.undefined;
        expect(renter.name).to.equal('Joe Irons');
        expect(renter._id).to.be.ok;
        expect(renter.dateCreated).to.be.ok;
        done();
      });
    });
  });
});

describe('Apartment', () => {
  describe('constructor', () => {
    it('does create an Apartment object', (done) => {
      const apartment = new Apartment({ name: 'A1',
                                        sqft: 1000,
                                        rooms: 1,
                                        rent: 1000,
                                        deposit: 50,
                                        collectedRent: 0,
                                        rentDue: 1,
                                        lateFee: 25,
                                      });
      apartment.validate(err => {
        expect(err).to.be.undefined;
        expect(apartment.name).to.equal('A1');
        expect(apartment._id).to.be.ok;
        expect(apartment.dateCreated).to.be.ok;
        done();
      });
    });
  });
});
