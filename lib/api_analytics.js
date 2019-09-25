'use strict';

const { getData } = require('./util');

exports.getUserSummary = async function ({ startDate, endDate }) {
  const { accessToken } = await this.ensureAccessToken();
  var url = this.prefix + `datacube/getusersummary?start_date=${startDate}&end_date=${endDate}&access_token=` + accessToken;
  return this.request(url, getData());
};

exports.getUserCumulate = async function ({ startDate, endDate }) {
  const { accessToken } = await this.ensureAccessToken();
  var url = this.prefix + `datacube/getusercumulate?start_date=${startDate}&end_date=${endDate}&access_token=` + accessToken;
  return this.request(url, getData());
};