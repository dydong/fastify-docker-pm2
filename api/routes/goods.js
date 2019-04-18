const {
  getGoodsCtrl,
  createGoodsCtrl
} = require("../controllers/goodsController");

module.exports = async function(fastify) {
  fastify.get("/goods", getGoodsCtrl);
  fastify.post("/goods", createGoodsCtrl);
};
