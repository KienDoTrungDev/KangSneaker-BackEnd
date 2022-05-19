const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const socksSchema = new Schema({
  // _id sản phẩm bên ProductModel
  idProduct: { type: Schema.Types.ObjectId, ref: 'product', required: true },

  // thời gian bảo hành tính theo tháng
  warranty: { type: Number, default: 0 },

  // dành cho nam hay nữ
  type: { type: Number, default: 0 },
  
  // Loại tất (Tất ngắn cổ, Tất cao cổ, Tất quá gối)
  sockType : { type: Number, enum: [0,1,2], default: 1 },

  // các hình ảnh của sản phẩm
  catalogs: [String],

  // bài viết mô tả chi tiết ở DescriptionModel
  details: Schema.Types.ObjectId,
});

const SocksModel = mongoose.model('sock', socksSchema, 'socks');

module.exports = SocksModel;
