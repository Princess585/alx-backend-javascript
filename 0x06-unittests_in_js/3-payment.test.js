const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
  it('should use call Utils.calculateNumber', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    spy.restore();
  });
});
