const { getGoods, createGoods } = require("../adaptors/goodsAdaptor");

const getGoodsCtrl = async (req, res) => {
  try {
    const { page } = req.query;
    const goods = await getGoods({ page });
    res.send(goods);
  } catch (err) {
    throw err;
  }
};

const createGoodsCtrl = async (req, res) => {
  try {
    const body = req.body;
    const goods = await createGoods({ body });
    res.send(goods);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getGoodsCtrl,
  createGoodsCtrl
};
