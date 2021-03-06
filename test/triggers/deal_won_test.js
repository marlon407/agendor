const plg = require('pluga-plg');
const expect = require('chai').expect;
const trigger = require('../../lib/triggers/deal_won');

describe('Trigger: deal won', () => {
  it('success', (done) => {
    const event = {
      meta: {
        baseURI: process.env.BASE_URI,
        lastReqAt: parseInt(process.env.LAST_REQ_AT)
      },
      auth: {
        token: process.env.TOKEN
      }
    };

    trigger.handle(plg, event).then((results) => {
      results.forEach((deal) => {
        expect(deal.dealStatus.id).to.eq(2);
      });

      done();
    }).catch(done);
  });
});
