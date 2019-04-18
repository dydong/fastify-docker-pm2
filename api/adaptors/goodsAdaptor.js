const nconf = require("nconf");
const joinUrl = require("url-join");

const selfAPIUrl = nconf.get("url.self");

const getGoods = ({ page = 1 }) =>
  getRequest({
    url: joinUrl(selfAPIUrl, "goods", `?page=${page}`)
  });

const createGoods = ({ body }) =>
  postRequest({
    url: joinUrl(selfAPIUrl, "goods"),
    options: {
      body
    }
  });

module.exports = {
  getGoods,
  createGoods
};
