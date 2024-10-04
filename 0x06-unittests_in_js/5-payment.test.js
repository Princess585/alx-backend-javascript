const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  beforeEach(function () {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    consoleSpy.restore();
  });

  it('should log the total for 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly('The total is: 120').to.be.true;
  });

  it('should log the total for 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnceWithExactly('The total is: 20').to.be.true;
  });
});
