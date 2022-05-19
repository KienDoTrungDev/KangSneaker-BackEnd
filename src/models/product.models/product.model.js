const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Note: Lược đồ thông tin chung cho các loại sản phẩm
const productSchema = new Schema({
  // mã sản phẩm, vd: "SKU200500854"
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    default: '',
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },

  type: {
    type: Number,
    required: true,
    default: 0,
  },
  brand: { type: String, require: true, trim: true },
  avt: {
    type: String,
    required: true,
    trim: true,
  },
  // số lượng sản phẩm tồn kho
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  // mức độ khuyến mãi
  discount: { type: Number, default: 0 },
  // đánh giá 1 - 5 sao, tương ứng với index element từ 0 - 4
  rate: {
    type: [Number],
    default: [0, 0, 0, 0, 0],
  },
  // các thông tin khác kèm theo, lưu với dạng {key: value}
  // vd: {key: 'Ưu đãi kèm theo', value: 'Bộ vệ sinh giày'}
  otherInfo: {
    type: Array,
    key: { type: String, trim: true },
    value: { type: String, trim: true },
    default: [],
  },
});

// text search index
productSchema.index(
  { name: 'text', brand: 'text' },
  { name: 'ix_search_text', default_language: 'none' },
);

const ProductModel = mongoose.model('product', productSchema, 'products');

module.exports = ProductModel;
