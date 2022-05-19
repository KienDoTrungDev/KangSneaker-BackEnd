const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoesLaceSchema = new Schema({
  // _id sản phẩm bên ProductModel
  idProduct: { type: Schema.Types.ObjectId, ref: 'product', required: true },

  // thời gian bảo hành tính theo tháng
  warranty: { type: Number, default: 0 },

  // Độ dài dây giày (80,100,120,160,200)
  length :  { type: Number, default: 0 },

  // các hình ảnh của sản phẩm
  catalogs: [String],

  // bài viết mô tả chi tiết ở DescriptionModel
  details: Schema.Types.ObjectId,
});

const ShoesLaceModel = mongoose.model('shoesLace', shoesLaceSchema, 'shoesLaces');

module.exports = ShoesLaceModel;
