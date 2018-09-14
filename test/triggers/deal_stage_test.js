const plg = require('pluga-plg');
const expect = require('chai').expect;
const trigger = require('../../lib/triggers/deal_stage');

describe('Trigger: deal stage', () => {
  it('test your trigger handle here', (done) => {
    const event = {
      meta: {
        baseURI: process.env.BASE_URI
      },
      auth: {
        token: process.env.TOKEN
      },
      input: {
        stage_id: 1446424
      }
    };

    trigger.handle(plg, event).then((results) => {
      results.forEach((deal) => {
        expect(deal.dealStage.id).to.eq(1446424);
      });
      done();
    }).catch(done);;
  });
});
