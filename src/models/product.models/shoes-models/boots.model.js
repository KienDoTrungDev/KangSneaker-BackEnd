const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bootsSchema = new Schema({
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

  // độ cao đế giày
  height :{ type: Number, enum: [1,3,5,7], default: 1 },

  // dành cho nam hay nữ
  type: { type: Number, enum: [0,1,2], default: 2 },

  //loại da (da bò nhập khẩu, da tổng hợp)
  leatherType: { type: Number, enum: [0,1], default: 0 },

  //Chất liệu đế (Cao su cao cấp, Cao su công nghiệp)
  soleMaterial : { type: Number, enum: [0,1], default: 0 },

  // các hình ảnh của sản phẩm
  catalogs: [String],

  // bài viết mô tả chi tiết ở DescriptionModel
  details: Schema.Types.ObjectId,
});

const BootsModel = mongoose.model('boots', bootsSchema, 'boots');

module.exports = BootsModel;
