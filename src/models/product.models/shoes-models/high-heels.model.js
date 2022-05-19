const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const highHeelsSchema = new Schema({
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

  // Độ cao đế giày
  height :{ type: Number, enum: [1,3,5,7,9,11], default: 1 },

  // dành cho nam hay nữ
  type: { type: Number, default: 1 },

  //loại da (da bò nhập khẩu, da tổng hợp)
  leatherType: { type: Number, enum: [0,1], default: 0 },

  //Hình dạng gót (Gót tròn, Gót vuông)
  soleType : { type: Number, enum: [0,1], default: 0 },

  // các hình ảnh của sản phẩm
  catalogs: [String],

  // bài viết mô tả chi tiết ở DescriptionModel
  details: Schema.Types.ObjectId,
});

const HighHeelsModel = mongoose.model('highHeel', highHeelsSchema, 'highHeels');

module.exports = HighHeelsModel;
