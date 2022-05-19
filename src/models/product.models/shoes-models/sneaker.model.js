const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
  // _id sản phẩm bên ProductModel
  idProduct: { type: Schema.Types.ObjectId, ref: 'product', required: true },

  // những size giày hiện có
  sizes: {
    type: [Number],
    required: true,
    default: [],
  },

  // thời gian bảo hành tính theo tháng
  warranty: { type: Number, default: 0 },

  // chiều cao giày
  height :{ type: Number, enum: [1,3,5], default: 1 },

  // dành cho nam hay nữ
  type: { type: Number, enum: [0,1,2], default: 2 },

  // phong cách
  style: { type: Number, enum: [0,1,2], default: 0 },

  // các hình ảnh của sản phẩm
  catalogs: [String],

  // bài viết mô tả chi tiết ở DescriptionModel
  details: Schema.Types.ObjectId,
});

const SneakerModel = mongoose.model('sneaker', sneakerSchema, 'sneakers');

module.exports = SneakerModel;
