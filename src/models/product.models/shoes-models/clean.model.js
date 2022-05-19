const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cleanSchema = new Schema({
  // _id sản phẩm bên ProductModel
  idProduct: { type: Schema.Types.ObjectId, ref: 'product', required: true },

  // thời gian bảo hành tính theo tháng
  warranty: { type: Number, default: 0 },

  // Thể tích
  volumn : { type: Number, default: 0 },

  // các hình ảnh của sản phẩm
  catalogs: [String],

  // bài viết mô tả chi tiết ở DescriptionModel
  details: Schema.Types.ObjectId,
});

const CleanModel = mongoose.model('clean', cleanSchema, 'cleans');

module.exports = CleanModel;
