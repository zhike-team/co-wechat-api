'use strict';

const API = require('../');
// const expect = require('expect.js');
const config = require('./config');


describe('api_analytics', function () {
  describe('getUserSummary', function () {
    it('should ok', async function () {
      var api = new API(config.appid, config.appsecret);
      var summary = await api.getUserSummary('2019-09-21', '2019-09-24');
      console.log('summary', summary);
      // expect(token).to.only.have.keys('accessToken', 'expireTime');
    });
  });

  describe('getUserCumulate', function () {
    it('should ok', async function () {
      var api = new API(config.appid, config.appsecret);
      var cumulate = await api.getUserCumulate('2019-09-21', '2019-09-24');
      console.log('cumulate', cumulate);
      // expect(token).to.only.have.keys('accessToken', 'expireTime');
    });
  });
});

